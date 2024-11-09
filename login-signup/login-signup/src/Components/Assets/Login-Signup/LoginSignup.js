import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";



const LoginSignup = () => {
  return (
    <div>
      <div className="form-box">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaRegUserCircle />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <RiLockPasswordFill />

          </div>
          <div className="remember-forgot">
            <label htmlFor=""><input type="checkbox" />Remember me</label>
            <a href="#"Forgot Password></a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>Don't have an account?<a href="#">Register</a></p>
          </div>
        </form>
      </div>
      <div className="form-box">
        <form action="">
          <h1>Registration</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaRegUserCircle />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <FaRegUserCircle />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <RiLockPasswordFill />

          </div>
          <div className="remember-forgot">
            <label htmlFor=""><input type="checkbox" />Remember me</label>
            <a href="#"Forgot Password></a>
          </div>
          <button type="submit">Login</button>
          <div className="register-link">
            <p>Already have an account?<a href="#">Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
