import React, { useState } from "react";
import logo from "../linkedin.svg";
function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [validateEmail, setValidateEmail] = useState(true);
  const [validatePass, setValidatePass] = useState(true);

  return (
    <div className='auth-container'>
      <form
        className='auth-form-container'
        onSubmit={(e) => {
          e.preventDefault();
          if (email === "") {
            setValidateEmail(false);
          } else if (email === "" && pass === "") {
            setValidateEmail(false);
          } else if (pass === ""){
            setValidatePass(false);
          } else if (email !== "") {
            setValidateEmail(true)
          } else if (pass !== "") {
            setValidatePass(true)
          } else if (email === "" && pass !== ""){
            setValidateEmail(false);
           
          }
        }}
      >
        <h1>Welcome to your professional community</h1>
        <div className='error-alert'>
          {!validateEmail ? <span>Please enter your email</span> : ""}
        </div>
        <div className='error-alert'>
          {!validatePass ? <span>Please enter your password</span> : ""}
        </div>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          onChange={(e) => {
            setEmail(e.target.value);

            // e.target.value!==""? setValidate(true) : setValidate(false)
          }}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          onChange={(e) => {
            setPass(e.target.value);
          }}
        ></input>
        <label className='forgot-password'>Forgot password?</label>
        <button type='submit' className='btn-sign-in'>
          Sign in
        </button>
      </form>

      <img src={logo} alt='' />
    </div>
  );
}

export default Login;
