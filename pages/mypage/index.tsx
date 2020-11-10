import { loginCheckAndRedilect, getUserInfo} from '../../util/common'

const index = () => {
  loginCheckAndRedilect()
  const userInfo = getUserInfo()
  return (
  <>
    <p>mypage画面</p>
    <div>your email: {userInfo?.email} </div>
  </>
  )
}

export default index
