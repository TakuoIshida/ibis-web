import React from 'react'
import { auth } from "../../src/firebase";
import Button from '@material-ui/core/Button'
import router  from 'next/router'
const handleLogout = () => {
  auth
    .signOut()
    .then(function() {
      alert("Logout successful");
      router.prefetch('/')
    })
    .catch(function(err) {
      alert("OOps something went wrong check your console");
      console.log(err);
    });
};
const Logout = () => {
  return (
    <>
      <Button variant="contained" onClick={handleLogout}>Logout</Button>
    </>
  )
}

export default Logout
