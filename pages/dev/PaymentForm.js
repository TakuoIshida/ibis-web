import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import { Redirect } from 'react-router-dom'
import styles from '../../public/styles/_payment_form.module.scss'
import { Button, TextField, Typography } from '@material-ui/core'
// TODO: 型指定は難しそう。（Stripeのオブジェクト(invoice, subscriptionなど )が非常に複雑な構造体のため）

// すべてのレンダリングで `Stripe` オブジェクトを再生成を避けるために、
// コンポーネントのレンダリングの外側で `loadStripe` を呼び出すようにしてください。
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || "")
if (!process.env.NEXT_PUBLIC_STRIPE_KEY) {
  console.error('**Stripe publishable key environment variable not set**')
  console.error(
    '**Add an environemnt variable NEXT_PUBLIC_STRIPE_KEY**'
  )
  console.error('**Replace .env.example with .env and **')
}

const CheckoutForm = ({ productSelected, customer }) => {
  const stripe = useStripe()
  const elements = useElements()
  const [subscribing, setSubscribing] = useState(false)
  const [accountInformation, setAccountInformation] = useState(null)
  const [errorToDisplay, setErrorToDisplay] = useState('')

  function handlePaymentThatRequiresCustomerAction({
    subscription,
    invoice,
    priceId,
    paymentMethodId,
    isRetry,
  }) {
    if (subscription && subscription.status === 'active') {
      // サブスクリプションはアクティブであり、顧客のアクションは必要ありません。
      return { subscription, priceId, paymentMethodId }
    }

    // 初回のお支払いの場合、お支払いの意図は最新の請求書に反映されます。
    // 再試行の場合、支払いの意図は請求書そのものになります。
    const paymentIntent = invoice
      ? invoice.payment_intent
      : subscription.latest_invoice.payment_intent

    if (
      paymentIntent.status === 'requires_action' ||
      (isRetry === true && paymentIntent.status === 'requires_payment_method')
    ) {
      return stripe
        .confirmCardPayment(paymentIntent.client_secret, {
          payment_method: paymentMethodId,
        })
        .then((result) => {
          if (result.error) {
            // 支払い詳細の更新を処理するためのコードフローを開始します。
            // UIにエラーメッセージを表示します。カードが拒否されました（資金不足、カードの有効期限切れなど
            throw result
          } else {
            if (result.paymentIntent.status === 'succeeded') {
              // コールバック前に顧客がウィンドウを閉じるリスクがある。実行します。この場合を処理するために、
              // webhook エンドポイントを設定してinvoice.payment_succeededをリッスンします。
              // このwebhookエンドポイントはInvoiceを返します。
              return {
                priceId: priceId,
                subscription: subscription,
                invoice: invoice,
                paymentMethodId: paymentMethodId,
              }
            }
          }
        })
    } else {
      // カスタマーアクションは必要ありません
      return { subscription, priceId, paymentMethodId }
    }
  }

  function handleRequiresPaymentMethod({
    subscription,
    paymentMethodId,
    priceId,
  }) {
    if (subscription.status === 'active') {
      // subscription is active, no customer actions required.
      return { subscription, priceId, paymentMethodId }
    } else if (
      subscription.latest_invoice.payment_intent.status ===
      'requires_payment_method'
    ) {
      // ここにリトライの状態を保存するために localStorage を使用しています。
      // (お好みのものに気軽に置き換えてください)
      // 最新の請求書IDとステータスを保存
      localStorage.setItem('latestInvoiceId', subscription.latest_invoice.id)
      localStorage.setItem(
        'latestInvoicePaymentIntentStatus',
        subscription.latest_invoice.payment_intent.status
      )
      throw new Error('Your card was declined.')
    } else {
      return { subscription, priceId, paymentMethodId }
    }
  }

  function retryInvoiceWithNewPaymentMethod({ paymentMethodId, invoiceId }) {
    const priceId = productSelected.name.toUpperCase()
    return (
      fetch('/retry-invoice', {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          customerId: customer.id,
          paymentMethodId: paymentMethodId,
          invoiceId: invoiceId,
        }),
      })
        .then((response) => {
          return response.json()
        })
        // If the card is declined, display an error to the user.
        .then((result) => {
          if (result.error) {
            // The card had an error when trying to attach it to a customer.
            throw result
          }
          return result
        })
        // Stripeが返すオブジェクトを含むように結果を正規化します。
        // 必要な詳細を追加します。
        .then((result) => {
          return {
            // 返された結果のStripeの'object'プロパティを使用して、
            // どのようなオブジェクトが返されるかを理解します。
            invoice: result,
            paymentMethodId: paymentMethodId,
            priceId: priceId,
            isRetry: true,
          }
        })
        // 一部のお支払い方法では、お支払い手続きを完了するためにお客様がセッション中である必要があります。
        // これらのアクションを処理するために、支払意思のステータスを確認してください。
        .then(handlePaymentThatRequiresCustomerAction)
        // No more actions required. Provision your service for the user.
        .then(onSubscriptionComplete)
        .catch((error) => {
          console.log(error)
          // エラーが発生しました。ここでユーザーに障害を表示します。
          setSubscribing(false)
          setErrorToDisplay(error && error.error && error.error.decline_code)
        })
    )
  }

  function onSubscriptionComplete(result) {
    console.log(result)
    // 支払いが成功しました。サービスへのアクセスを提供します。
    // 支払いが完了したので、localstorageから請求書を削除します。
    // clearCache()
    if (result && !result.subscription) {
      const subscription = { id: result.invoice.subscription }
      result.subscription = subscription
      localStorage.clear()
    }

    setAccountInformation(result)
    // 顧客に成功メッセージを表示するようにUIを変更します。
    // onSubscriptionSampleDemoComplete(result)
    // バックエンドを呼び出して、以下に基づいてサービスへのアクセスを許可します。
    // 顧客が購読していた製品を取得します。
    // result.subscription.price.productを使用して製品を取得します。
  }

  function createSubscription({ paymentMethodId }) {
    const priceId = productSelected.name.toUpperCase()
    return (
      fetch('/create-subscription', {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          customerId: customer.id,
          paymentMethodId: paymentMethodId,
          priceId: priceId,
        }),
      })
        .then((response) => {
          return response.json()
        })
        .then((result) => {
          if (result.error) {
            throw result
          }
          return result
        })
        .then((result) => {
          return {
            subscription: result,
            paymentMethodId: paymentMethodId,
            priceId: productSelected.name,
          }
        })
        // Some payment methods require a customer to do additional
        // authentication with their financial institution.
        // Eg: 2FA for cards.
        .then(handlePaymentThatRequiresCustomerAction)
        // このカードのカスタマーオブジェクトへのアタッチは成功したが、
        // カスタマーへのチャージの試みは失敗した場合。
        // requires_payment_method エラーが発生します。
        .then(handleRequiresPaymentMethod)
        // ユーザーのためにあなたのサービスを提供します。
        .then(onSubscriptionComplete)
        .catch((error) => {
          // エラーが発生しました。ここでユーザーに障害を表示します。
          // 作成したHTML要素を活用しています。
          setSubscribing(false)
          setErrorToDisplay(error.message || error.error.decline_code)
        })
    )
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setSubscribing(true)

    if (!stripe || !elements) {
      return
    }
    const latestInvoicePaymentIntentStatus = localStorage.getItem(
      'latestInvoicePaymentIntentStatus'
      )
      
    const cardElement = elements.getElement(CardElement)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    })

    if (error) {
      console.log('[createPaymentMethod error]', error)
      setSubscribing(false)
      setErrorToDisplay(error && error.message)
      return
    }
    console.log('[PaymentMethod]', paymentMethod)
    const paymentMethodId = paymentMethod.id
    if (latestInvoicePaymentIntentStatus === 'requires_payment_method') {
      // Update the payment method and retry invoice payment
      const invoiceId = localStorage.getItem('latestInvoiceId')
      retryInvoiceWithNewPaymentMethod({
        paymentMethodId: paymentMethodId,
        invoiceId: invoiceId,
      })
      return
    }

    // Create the subscription
    createSubscription({
      paymentMethodId: paymentMethodId,
    })

    
  }

  if (accountInformation) {
    return (
      <Redirect
        to={{
          pathname: '/account',
          state: { accountInformation: accountInformation },
        }}
      />
    )
  } else {
    return (
      <div id="payment-form" className={styles.flex}>
        <div className={styles.w_full__display}>
          <div className={styles.service_intro}>
              <Typography gutterBottom variant="h5" component="h2" className={styles.service_intro_text}>
              クレジットカード番号の入力
              </Typography>
          </div>
          <Typography className={styles.text_gray_700__text_base}>
            商品名：{productSelected.name}
          </Typography>
          <Typography className={styles.text_gray_700__text_base}>
            価格：￥{productSelected.price}/月(税抜)
          </Typography>

          <div className={styles.w_full}>
            <div className={styles.flex__flex_wrap__mx_3__mb_2}>
              <div className={styles.w_full__px_3__md_mb_0}>
                <Typography className={styles.block__uppercase__tracking_wide__text_gray_700__text_xs__font_bold__mb_2}>
                  お名前：
                </Typography>
                <TextField
                  className={styles.appearance_none__block__w_full__bg_gray_200__border__rounded_md__padding__leading_tight__focus_outline_none__focus_bg_white}
                  id="name"
                  type="text"
                  placeholder="First and last name"
                  required
                />
              </div>
            </div>
            <form id="payment-form" onSubmit={handleSubmit}>
              <div className={styles.flex__flex_wrap__mx_3__mb_2}>
                <div className={styles.w_full__px_3__md_mb_0}>
                  <label className={styles.block__uppercase__tracking_wide__text_gray_700__text_xs__font_bold__mb_2}>
                    Card
                  </label>
                  <div
                    className={styles.appearance_none__block__w_full__bg_gray_200__border__rounded_md__padding__leading_tight__focus_outline_none__focus_bg_white}
                    id="card-element"
                  >
                    {/* stripe の組み込みコンポネント */}
                    <CardElement className={styles.card_element}/>
                  </div>
                  <Typography className={styles.error_message}>
                    {errorToDisplay ? errorToDisplay : null}
                  </Typography>
                </div>
              </div>
              <div className={styles.button}>
              <Button 
                variant="contained"
                color="secondary"
                id="submit-premium"
                type="submit"
                >
                <Typography>{subscribing ? 'Loading...' : '購入'}</Typography>
              </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const PaymentForm = (props) => (
  <Elements stripe={stripePromise}>
    <CheckoutForm {...props} />
  </Elements>
)

export default PaymentForm
