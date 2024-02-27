import React from 'react'
import './Auth.css'
import LeftSide from './LeftSide'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
      <div className="auth">
        <div className="content">
          <div className="left">
            <div class="loginForm">
              <h2 className='header'>Se connecter</h2>
              <p>Entrez votre e-mail et votre mot de passe ci-dessous pour vous connecter à votre compte </p>
              <div>
                <div className="input-field">
                  <label htmlFor="">Email</label>
                  <input type="text"
                    placeholder="Enter your email"
                  />

                </div>
                <div className="input-field">
                  <label htmlFor="">Password</label>
                  <input type="password"
                    placeholder="Enter your email"
                  />
                </div>

                <button className='btn2' >Se connecter</button>
                <div className="link">
                  <Link to={'/register'}>noveau compte</Link>
                  <Link to={'/forgetpass'}>oublie mot de pass ?</Link>

                </div>
              </div>
            </div>
          </div>
          <LeftSide />
        </div>
      </div>
    </>
  )
}

export default Login