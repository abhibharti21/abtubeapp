import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaLinkedin } from 'react-icons/all';
import '../style/Login.scss';

const Login = () => {
  return (
    <div className="box">
      <div className="login">
        <h2>Login</h2>
        <div className="user-box">
          <p>username</p>
          <input type="text" placeholder="Enter Your Name..." />
        </div>
        <div className="user-box">
          <p>password</p>
          <input type="password" placeholder="Enter Your Password..." />
        </div>
        <div className="fbr">
          <Link to={'/'}>Forgot Password?</Link>
        </div>
        <button>Login</button>
        <p>Or Sign Up using</p>
        <div className="link-box">
          <a href="https://www.facebook.com" target={'_blank'} rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://google.com" target={'_blank'} rel="noreferrer">
            <FaGoogle />
          </a>
          <a href="https://www.linkedin.com" target={'_blank'} rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <p>Or Sign Up using</p>
        <Link to={'/sign_up'}>Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
