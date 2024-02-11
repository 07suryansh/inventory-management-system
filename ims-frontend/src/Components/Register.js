import React from "react";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { handleRegister } from "../Utils/service";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    const result = await handleRegister(user);
    if (result) {
      console.log();
      toast.success("User registered successfully");
      navigate("/login");
    }
  };

  const handleUser = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="login">
      <span className="login-text">Register</span>
      <form action="post" className="login-form" onSubmit={onSubmit}>
        <input
          type="text"
          className="input-field"
          value={user.name}
          onChange={handleUser}
          name="name"
          id=""
          placeholder="Enter name"
        />
        <input
          type="email"
          className="input-field"
          value={user.email}
          onChange={handleUser}
          name="email"
          id=""
          placeholder="Enter email"
        />
        <input
          type="password"
          name="password"
          className="input-field"
          value={user.password}
          onChange={handleUser}
          id=""
          placeholder="Enter password"
        />
        <Dropdown
          value={user.role}
          onChange={handleUser}
          name="role"
          className="input-field"
        />
        <button className="btn" type="submit">
          Register
        </button>
        <a href="/login" className="register-link">
          Log In
        </a>
      </form>
    </div>
  );
}
