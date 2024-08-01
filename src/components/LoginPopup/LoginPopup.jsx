import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'


const LoginPopup = ({setShowLogin}) => {

  const[currState, setCurrState] = useState("Sign Up")

  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt=""/>
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input type="text" placeholder='Seu Nome' required/>}     
          <input type="email" placeholder='Seu Email' required/>
          <input type="password" placeholder='Senha' required/>
        </div>
        <button>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>Eu concordo com os termos de uso e política de privacidade.</p>
        </div>
        {currState==="Login"
        ?<p>Criar conta nova? <span onClick={()=>setCurrState("Sign Up")} >Click aqui</span></p>
        :<p>Já possui uma conta? <span onClick={()=>setCurrState("Login")}>Entrar Aqui</span></p>
       }
        </form>


    </div>

  )
}

export default LoginPopup
