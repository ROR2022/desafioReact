import React from 'react'
import DevtoNavbar from "../components/DevtoNavBar/DevtoNavbar";
import DevtoFooter from "../components/DevtoFooter/DevtoFooter";

import FormRegister from '../components/LoginComponents/FormRegister';


const Register = () => {
  return (
    <div>
      <DevtoNavbar/>
      
      <FormRegister/>
      <DevtoFooter/>
      </div>
  )
}

export default Register