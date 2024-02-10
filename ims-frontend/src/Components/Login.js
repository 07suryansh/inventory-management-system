import React from "react";
import "./login.css";
import { useState } from "react";
import { handleLogin } from "../Utils/service";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const result = await handleLogin(user);
    if (result) {
      console.log();
      localStorage.setItem("token", result);
      navigate("/home");
    } else {
      toast.error("Something went wrong");
    }
  };

  const handleUser = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="login">
      <span className="login-text">Log In</span>
      <form action="post" className="login-form" onSubmit={onSubmit}>
        <input
          type="email"
          className="input-field"
          name="email"
          id=""
          value={user.name}
          onChange={handleUser}
          placeholder="Enter email"
        />
        <input
          type="password"
          name="password"
          className="input-field"
          id=""
          value={user.password}
          onChange={handleUser}
          placeholder="Enter password"
        />
        <button className="btn" type="submit">
          Log In
        </button>
        <a href="/register" className="register-link">
          Register user
        </a>
      </form>
    </div>
  );
}
