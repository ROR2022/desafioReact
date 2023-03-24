import React from 'react'
import DevtoNavbar from "../components/DevtoNavBar/DevtoNavbar";
import DevtoFooter from "../components/DevtoFooter/DevtoFooter";
import FormLogin from '../components/LoginComponents/FormLogin';

const Login = () => {
  return (
    <div>
      <DevtoNavbar/>
      <FormLogin/>
      <DevtoFooter/>
      </div>
  )
}

export default Login