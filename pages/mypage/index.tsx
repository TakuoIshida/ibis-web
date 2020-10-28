import { isUserLogin, getUserToken} from '../../util/common'

const index = () => {
  isUserLogin()
  const token = getUserToken()
  console.log(token)
  return (
  <>
    <p>mypage画面</p>
    <div>your email: </div>
  </>
  )
}

export default index
