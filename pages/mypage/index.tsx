import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import React, {useState} from 'react'
import Avatar from '@material-ui/core/Avatar'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Button from '@material-ui/core/Button'
import router from 'next/router'
import { useForm } from 'react-hook-form'
import { loginCheckAndRedilect, getUserInfo} from '../../util/function'

type FormData = {
  text: string,
  userGrade: number
}

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}
import { TextField } from '@material-ui/core'

const Index = () => {
  // URL直叩き対策
  loginCheckAndRedilect()

  const userInfo = getUserInfo()
  console.log(userInfo)
  const {register, handleSubmit, errors} = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    // submitFocusError: true
  })
  const [open, setOpen] = useState(false)
  
  const onSubmitData = (data: FormData) => {
    console.log(data)
    setOpen(true)
    setText(data.text)
    // TODO: POST, asyncで非同期処理必須
    // await fetch(url, body).then(() => router.push('/'))
  }
  //メモ TODO: 入力内容が増える・複雑化するようならreduxに変更する
  const [text, setText] = useState('')
const handleChangeMemo = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
  console.log(e.target.value)
  setText(e.target.value)
}
  //watchに各フォーム部品のnameの値を引数で渡すとでタイムリーで入力状態を監視してる
  return (
  <>
  <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    open={open}
    >
    <Alert severity="success" >更新完了しました</Alert >
  </Snackbar>
  {/*TODO:  Validationは、onBlurで行う。react-hooks-form の公式 */}
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

  </>
  )
}

export default Index
