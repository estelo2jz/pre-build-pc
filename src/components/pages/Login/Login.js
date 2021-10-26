import React from 'react';

import LoginBg from '../../../assets/images/login/login.png'

import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__log-in">
          <p>LOG IN.</p>
          <p>Log in with your details below to view your order.</p>
        </div>
        <div className="login__input">
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
        </div>
        <div className="login__btn-login">
          <button>LOGIN</button>
          <p>Forgot your password?</p>
        </div>
        <div className="login__btn-sign">
          <p>Don't have an account</p>
          <button>SIGN UP</button>
        </div>
      </div>
      <div className="login__img">
        <img src={LoginBg} alt="" />
      </div>
    </div>
  )
}

export default Login
