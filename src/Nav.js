import React from 'react'
import { Link } from "react-router-dom";
import {signOut} from 'firebase/auth'
import {auth} from './firebase-config'

import {useNavigate} from 'react-router-dom'


const Nav = ({isAuth,setIsAuth}) => {
   let navigate= useNavigate();
  const signUserOut=()=>{
     
    signOut(auth).then(()=>{
      localStorage.clear(  )
      setIsAuth(false)
      navigate("/Login")
    })
  }
  return (
    <nav>
     <div className='logo'><h3>Vickyshinny</h3></div>
     <Link to='/'>Home</Link>
      <Link to='/CreatePost'>Post</Link>
    <Link to='/MyGallery'>Gallery</Link>

      
  {!isAuth ? <Link to='/Login'>Login</Link>:<button onClick={signUserOut}> Log Out </button>}

    
    </nav>
  )
}

export default Nav