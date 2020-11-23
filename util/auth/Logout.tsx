import Button from '@material-ui/core/Button'
import { logout } from '../function'

const Logout = () => {
  return (
    <>
      <Button variant="contained" onClick={logout}>Logout</Button>
    </>
  )
}

export default Logout
