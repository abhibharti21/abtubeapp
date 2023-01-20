import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Signup.scss';

const Signup = () => {
  return (
    <div className="box">
      <div className="login">
        <h2>sign up</h2>
        <div className="user-box">
          <p>username</p>
          <input type="text" placeholder="Enter Your Username..." />
        </div>
        <div className="user-box">
          <p>password</p>
          <input type="password" placeholder="Enter Your Password..." />
        </div>
        <div className="fbr">
          <Link to="/login">Forgot Password?</Link>
        </div>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
