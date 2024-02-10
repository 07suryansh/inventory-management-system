import React from 'react'
import Dropdown from './Dropdown'
import axios from 'axios'
import { useState } from 'react'

export default function Register() {
  const [user,setUser]=useState({name:"",email:"",password:"",role:""});

  const onSubmit=(e)=>{
    e.preventDefault();
    console.log(e.target.value);
    
  }

  return (
    <div className="login">
    <span className="login-text">Register</span>
      <form action="post" className="login-form" onSubmit={onSubmit}>
      <input type="text" className="input-field" name="" id="" placeholder="Enter name"/>
        <input type="email" className="input-field" name="" id="" placeholder="Enter email"/>
        <input type="password" name="" className="input-field" id="" placeholder="Enter password"/>
        <Dropdown className="input-field"/>
        <button className="btn" type="submit">Register</button>
        <a href="http://" className="register-link">Log In</a>
      </form>
    </div>
  )
}
