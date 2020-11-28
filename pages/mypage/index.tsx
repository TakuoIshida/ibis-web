import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Button from '@material-ui/core/Button'
import router from 'next/router'
import { useForm } from 'react-hook-form'
import { loginCheckAndRedilect, getUserInfo} from '../../util/function'
import { gradeList } from '../../util/const'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Card from '@material-ui/core/Card'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import styles from '../../public/styles/_mypage.module.scss'
import { cancelSubscription, updateSubscription } from '../../util/stripe_function'

// Mypage

// ユーザープロフィール情報/stripe情報のGET・POST
// (クレジット決済情報の変更)

type FormData = {
  text: string,
  userGrade: number
}

import { TextField } from '@material-ui/core'

const Index = () => {
  // URL直叩き対策
  loginCheckAndRedilect()

  const userInfo = getUserInfo()
  // TODO: APIからユーザーのグレードを取得する
  function getUserGrade():number {
    return 2
  }
  const userGrade: number = getUserGrade()
  const {register, handleSubmit, errors} = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    // submitFocusError: true
  })
  const [open, setOpen] = useState(false)
  // ユーザーのグレードを選択する
  const [selectedGradeId, setSelectedProductId] = useState(userGrade)
  const choiceUserGrade = (id :number) => {
    setSelectedProductId(id)
  }
  const onSubmitData = (data: FormData) => {
    console.log(data)
    setOpen(true)
    setText(data.text)
    // 2秒後に表示を消す
    setTimeout(() => setOpen(false), 2000)
    // TODO: POST, asyncで非同期処理必須
    // await fetch(url, body).then(() => router.push('/'))
  }
  //メモ TODO: 入力内容が増える・複雑化するようならreduxに変更する
  const [text, setText] = useState('')
  const handleChangeMemo = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    console.log(e.target.value)
    setText(e.target.value)
  }
  const gradeChangeRequest = (selectedGradeId: number) => {
    console.log("selectedGradeId is ", selectedGradeId)
    // ユーザのサブスクIdを取得してPOSTする
    // updateSubscription()
  }
  const stopSubscription = (selectedGradeId: number) => {
    console.log("cancel is start")
    console.log("selectedGradeId", selectedGradeId)
    // ユーザのサブスクIdを取得してPOSTする
    // cancelSubscription()

  }
  //watchに各フォーム部品のnameの値を引数で渡すとでタイムリーで入力状態を監視してる
  return (
  <>
  <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    open={open}
    >
    <MuiAlert severity="success" elevation={6} variant="filled">更新完了しました</MuiAlert>
  </Snackbar>
  {/* https://react-hook-form.com/api/#register */}
    {(userInfo?.photoURL)? (<Avatar alt="user photo" src={userInfo.photoURL} />) : (<AccountCircle />)}
    <form onSubmit={handleSubmit(onSubmitData)} className='contactBox'>
      <TextField
      error={errors?.text? true : false}
      label={'Memo'}
      placeholder=""
      value={text}
      onChange={handleChangeMemo}
      name='text'
      helperText={errors?.text?.message}
      inputRef={register({ 
        required: '必須入力です', 
        maxLength: {
          value: 10,
          message: '文字が長すぎます'
        },
        // 正規表現
        // pattern: /\d+/
      })}
      />
      <Button
          variant="contained"
          color="primary"
          // className={styles.addBtn}
          type="submit"
          >
          登録
      </Button >
      </form>

      {/* 無料有料会員の表示・選択 */}
      <div className={styles.display_flex}>
        {gradeList.map((grade, idx) => {
            return(
            <div className={styles.row}>
                {/* 無料会員は選択されない */}
                {
                    idx == 0 ? 
                    (
                    <div>
                    <Card key={idx} className={styles.card}>
                        <CardMedia
                        component="img"
                        className={styles.height}
                        // publicをrootとしてpathを書く
                        image={`/img/${grade.imageId}.jpg`}
                        title={grade.name}
                        alt={grade.name}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {grade.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {grade.description}
                        </Typography>
                        <Divider />
                        <Typography variant="h6" gutterBottom className={styles.plan}>
                            {grade.price}円/月（税抜）
                        </Typography>
                        </CardContent>
                    </Card>
                    </div>
                    )
                  :
                  (
                    //   選択されたサービスの枠を囲う
                    <div className={(idx == selectedGradeId-1)? styles.selected: ""}>
                      <Card key={idx} className={styles.card}>
                      <CardActionArea onClick={() => choiceUserGrade(grade.id)}>
                          <CardMedia
                          component="img"
                          className={styles.height}
                          // publicをrootとしてpathを書く
                          image={`/img/${grade.imageId}.jpg`}
                          title={grade.name}
                          alt={grade.name}
                          />
                          <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                              {grade.name}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                              {grade.description}
                          </Typography>
                          <Divider />
                          <Typography variant="h6" gutterBottom className={styles.plan}>
                              {grade.price}円/月（税抜）
                          </Typography>
                          </CardContent>
                      </CardActionArea>
                      </Card>
                    </div>
                  )
                }
            </div>
            )
        })}
    </div>
      {/* 現在使用しているグレードがわかるようにする */}
      
      <Button 
        variant="contained"
        color="secondary"
        disabled={(userGrade != selectedGradeId)? false : true}
        onClick={() => gradeChangeRequest(selectedGradeId)}> 変更する</Button>
        <Button 
        variant="contained"
        color="primary"
        disabled={(userGrade != selectedGradeId)? true : false}
        onClick={() => stopSubscription(selectedGradeId)}> 有料会員をやめる</Button>
      {/* TODO: 任意のクレジットを登録できる */}
      {/* TODO: 任意のクレジットを選択できる */}
  </>
  )
}

export default Index
