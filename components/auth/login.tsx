import { auth, firebase } from "../../src/firebase"
import Button from '@material-ui/core/Button'
import router from "next/router";

const handleSignIn = () => {
  var provider = new firebase.auth.GoogleAuthProvider()
  auth
    .signInWithPopup(provider)
    .then((result) => {
      // The signed-in user info.
      // var user = result.user
      console.log(result)
      router.push('/')
    })
    .catch(err => {
      alert("OOps something went wrong check your console");
      console.log(err.code);
      console.log(err.message);
      console.log(err.email);
      console.log(err.credential);
      console.log(err);
    });
};

const Login = () => {
  
  return (
    <>
      <Button variant="contained" onClick={handleSignIn}>
      <img src="/static/img/google_logo.png" className="sns-icon" alt="Googleロゴ" width="50px" height="50px"/>
      Sign In using google
      </Button> 
    </>
  )
}

export default Login
