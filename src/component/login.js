/*import React from "react";
import { useDispatch } from "react-redux";
import { logAction } from "../authLogin";
import "./login.css";

const Login = () => {
  const dispatch = useDispatch();
  const addLogin = (ev) => {
    ev.preventDefault();
    dispatch(logAction.login());
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={addLogin}>
        <label htmlFor="user">Username</label>
        <input type="text" id="user" name="user" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button className="btn-lgn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;*/
