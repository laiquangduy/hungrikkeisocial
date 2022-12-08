import React, { useState } from "react";
import logo from "../logo121.png";

export default function SignUp() {
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const [noEmail, setNoEmail] = useState([]);
  const [noPassword, setNoPassword] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("test");
    if (!email) {
      setNoEmail("Please enter your email address.");
    } else if (!password) {
      setNoEmail("");
      setNoPassword("Please enter your password.");
    } else {
      const data = { email: email, password: password };

      fetch("http://127.0.0.1:8000/auth/register", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          window.location.href = "http://127.0.0.1:3000/auth/login";
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      setNoEmail("");
      setNoPassword("");
      console.log(12);
    }
  };

  return (
    <>
      <div className='sign-container'>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>
        <div className='form-sign-up'>
          <p className='title'>Make the most of your professional life</p>
          <form onSubmit={handleSubmit} className='form'>
            <p>Email</p>
            <input
              className='input'
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              value={email}
            />
            <p className='validate'>{noEmail}</p>
            <p>Password (6 or more characters)</p>
            <input
              className='input'
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              value={password}
            />
            <p className='validate'>{noPassword}</p>
            <div className='policy'>
              By clicking Agree & Join, you agree to the Rikkei Social{" "}
              <a href='#'>User Agreement</a>, <a href='#'>Privacy Policy</a>,{" "}
              <a href='#'>and Cookie Policy</a>.
            </div>
            <button className='btn-submit'> Agree & Join </button>
            <h5>
              Already on Rikkei Social?
              <a href='#'>Sign in</a>
            </h5>
          </form>
        </div>
        <div className='vkk'>
          Looking to create a page for a business? <a href='#'>Get help</a>
        </div>
        <div>
          <ul className='ul'>
            <li>
              <a href='#'>Accessibility</a>
            </li>
            <li>
              <a href='#'>Privacy Policy</a>
            </li>
            <li>
              <a href='#'>Copyright Policy</a>
            </li>
            <li>
              <a href='#'>Guest Controls</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>User Agreement</a>
            </li>
            <li>
              <a href='#'>Cookie Policy</a>
            </li>
            <li>
              <a href='#'>Brand Policy</a>
            </li>
            <li>
              <a href='#'>Community Guidelines</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
