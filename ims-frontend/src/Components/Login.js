import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
    <span className="login-text">Log In</span>
      <form action="" className="login-form">
        <input type="email" className="input-field" name="" id="" placeholder="Enter email"/>
        <input type="password" name="" className="input-field" id="" placeholder="Enter password"/>
        <button className="btn" type="submit">Log In</button>
        <a href="http://" className="register-link">Register user</a>
      </form>
    </div>
  );
}
