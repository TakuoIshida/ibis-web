// stripe の関数は全てここに集約し、引数・戻り値の型を指定する（予定）
// ※ stripe のIdは全てstring型！

// import { loadStripe } from '@stripe/stripe-js'
import {
//   CardElement,
//   Elements,
  useStripe,
//   useElements,
} from '@stripe/react-stripe-js'

const stripe = useStripe()
// const elements = useElements()

// 有料会員を解約する
export const cancelSubscription = (subscriptionId: string) => {
    return fetch('/cancel-subscription', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subscriptionId: subscriptionId,
      }),
    })
      .then(response => {
        return response.json()
      })
      .then(cancelSubscriptionResponse => {
        // 解約処理が完了しました
        console.log(cancelSubscriptionResponse)
      })
}

// 有料プランを変更する
export const updateSubscription = (priceId: string, subscriptionId: string) => {
    return fetch('/update-subscription', {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        // バックエンドでログインユーザーに紐づくsubscriptionIdから取得してもOK
        subscriptionId: subscriptionId,
        newPriceId: priceId,
      }),
    })
      .then(response => {
        return response.json()
      })
      .then(response => {
        // 会員グレードを変更しました
        console.log(response)
        return response
      })
}

type retryInvoiceWithNewPaymentMethodType ={
    customerId: string,
    paymentMethodId: string,
    invoiceId: string,
    priceId: string
}

// クレジットカードの設定変更を行い、新しい支払い方法、請求書、価格IDの発行を行う
export const retryInvoiceWithNewPaymentMethod = ({
    customerId,
    paymentMethodId,
    invoiceId,
    priceId
  }: retryInvoiceWithNewPaymentMethodType ) => {
    return (
      fetch('/retry-invoice', {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          customerId: customerId,
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
        // Normalize the result to contain the object returned by Stripe.
        // Add the additional details we need.
        .then((result) => {
          return {
            // Use the Stripe 'object' property on the
            // returned result to understand what object is returned.
            invoice: result,
            paymentMethodId: paymentMethodId,
            priceId: priceId,
            isRetry: true,
          }
        })
        // Some payment methods require a customer to be on session
        // to complete the payment process. Check the status of the
        // payment intent to handle these actions.
        // TODO:
        // .then(handlePaymentThatRequiresCustomerAction)

        // No more actions required. Provision your service for the user.
        .then(onSubscriptionComplete)
        .catch((error: any) => {
          // An error has happened. Display the failure to the user here.
          // We utilize the HTML element we created.
          displayError(error)
        })
    )
}

type handlePaymentThatRequiresCustomerActionType = {

    // 構造体(result)が複雑すぎるため
    subscription: any,
    invoice: any,
    priceId: string,
    paymentMethodId: string,
    isRetry: boolean,
}

// 支払い状況を請求書・ステータスを元に監視する
export const handlePaymentThatRequiresCustomerAction = ({
    subscription,
    invoice,
    priceId,
    paymentMethodId,
    isRetry,
  }: handlePaymentThatRequiresCustomerActionType)=> {
    if (subscription && subscription.status === 'active') {
      // Subscription is active, no customer actions required.
      return { subscription, priceId, paymentMethodId }
    }
  
    // If it's a first payment attempt, the payment intent is on the subscription latest invoice.
    // If it's a retry, the payment intent will be on the invoice itself.
    let paymentIntent = invoice ? invoice.payment_intent : subscription.latest_invoice.payment_intent
  
    if (
      paymentIntent.status === 'requires_action' ||
      (isRetry === true && paymentIntent.status === 'requires_payment_method')
    ) {
      return stripe?.confirmCardPayment(paymentIntent.client_secret, {
          payment_method: paymentMethodId,
        })
        .then((result) => {
          if (result.error) {
            // Start code flow to handle updating the payment details.
            // Display error message in your UI.
            // The card was declined (i.e. insufficient funds, card has expired, etc).
            throw result
          } else {
            if (result?.paymentIntent?.status === 'succeeded') {
              // Show a success message to your customer.
              return {
                priceId: priceId,
                subscription: subscription,
                invoice: invoice,
                paymentMethodId: paymentMethodId,
              }
            }
          }
        })
        .catch((error) => {
          displayError(error)
        })
    } else {
      // No customer action needed.
      return { subscription, priceId, paymentMethodId }
    }
  }

// サブスク登録成功
export const onSubscriptionComplete = (result: any) => {
    // Payment was successful.
    if (result.subscription.status === 'active') {
      // Change your UI to show a success message to your customer.
      // Call your backend to grant access to your service based on
      // `result.subscription.items.data[0].price.product` the customer subscribed to.
    }
  }
  
//   card.on('change', function (event) {
//     displayError(event);
//   });

// エラーレスポンス
export const displayError = (event: any) => {
    // TODO: 要調査
    // changeLoadingStatePrices(false);
    let displayError = document.getElementById('card-element-errors')
    if (displayError) {
        if (event.error) {
            displayError.textContent = event.error.message;
        } else {
            displayError.textContent = '';
        }
    }
  }