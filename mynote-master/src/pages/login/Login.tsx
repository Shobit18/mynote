import React, { useState } from "react";
import { useAuth } from "../../components/auth";

import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [usernamelog, setUsernamelog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const auth: any = useAuth()

  const navigate = useNavigate()

  function handleLogin(e: any) {
    e.preventDefault();
    auth.login(usernamelog)
    auth.login(passwordlog)
    navigate('home')
    let pass = JSON.parse(localStorage.getItem("loginData") || "[]");
    let username = JSON.parse(localStorage.getItem("loginData") || "[]");

    console.log("pass" + pass.password)

    if (!usernamelog || !passwordlog) {
      console.log("Enter usename")
    }
    else if (passwordlog != pass.password || usernamelog != username.username) {
      alert("enter register name")

    } else {
      navigate("/admin/HomeHeader")
    }

  }


  return (
    <div className=" bg-green-200 w-96 h-max m-2 p-4  rounded-md">
      <form onSubmit={handleLogin}>
        <h3 className="ml-28 text-red-600 m-2">LogIn</h3>
        <div className="m-2 p-2">
          <label>name</label>
          <input
            type="text"
            className="m-2 p-2"
            placeholder="Enter username"
            onChange={(event) => setUsernamelog(event.target.value)}
          />
        </div>

        <div className="m-2 p-2">
          <label>Password</label>
          <input
            type="password"
            className="m-2 p-2"
            placeholder="Enter password"
            onChange={(event) => setPasswordlog(event.target.value)}
          />
        </div>

        <button type="submit" onClick={handleLogin} className="bg-green-400  rounded-md p-2">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;