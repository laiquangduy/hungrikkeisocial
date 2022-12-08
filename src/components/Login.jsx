import React, { useState } from "react";
import logo from "../linkedin.svg";
function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [validateEmail, setValidateEmail] = useState(true);
  const [validatePass, setValidatePass] = useState(true);
  const [validateBorderEmail, setValidateBorderEmail] = useState("black");
  const [validateBorderPass, setValidateBorderPass] = useState("black");

  return (
    <div className='auth-container'>
      <form
        className='auth-form-container'
        onSubmit={(e) => {
          e.preventDefault();
          if (email === "" && pass !== "") {
            setValidateEmail(false);
            setValidatePass(true);
            setValidateBorderEmail("red");
            setValidateBorderPass("black");
          } else if (email === "" && pass === "") {
            setValidateEmail(false);
            setValidatePass(true);
            setValidateBorderEmail("red");
            setValidateBorderPass("red");
          } else if (pass === "" && email !== "") {
            setValidatePass(false);
            setValidateEmail(true);
            setValidateBorderEmail("black");
            setValidateBorderPass("red");
          } else if (pass !== "" && email !== "") {
            setValidatePass(true);
            setValidateEmail(true);
            setValidateBorderEmail("black");
            setValidateBorderPass("black");
            const data = { email: email, password: pass };

            fetch("http://127.0.0.1:8000/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data.message);
              })
              .catch((error) => {
                console.error("Error:", error);
              });
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
          style={{ borderColor: validateBorderEmail }}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          onChange={(e) => {
            setPass(e.target.value);
          }}
          style={{ borderColor: validateBorderPass }}
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
