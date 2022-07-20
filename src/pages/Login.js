import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import {auth,provider} from '../firebase-config'
import {useNavigate} from 'react-router-dom'

const Login = ({setIsAuth}) => {
  let navigate= useNavigate();
  const signInwithGoogle  =()=> {
signInWithPopup(auth,provider).then((result)=>{
   
  localStorage.setItem("isAuth",true)
  setIsAuth(true)
  navigate("/");
}) 
  }; 
  return (
    <div className='loginPage'>
    <p> Sign in with google to continue</p>
    
    <button className='login-with-google-btn' onClick={signInwithGoogle}> Sign in with google</button>
    </div>
  )
}

export default Login