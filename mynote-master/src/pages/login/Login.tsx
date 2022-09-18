import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderHome from "../home/HeaderHome";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const navigate = useNavigate()

  function handleLogin(e:any) {
    e.preventDefault();
    let pass = JSON.parse(localStorage.getItem("Password") || "[]" ) ;
    let mail = JSON.parse(localStorage.getItem("Email") || "[]");
    

    if (!emaillog || !passwordlog) {
      alert("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      alert("Enter Register Username and Password ")
    } else {
      navigate("/admin/headerHome")
      
    }
  }


  return (
    <div className=" bg-green-200 w-96 h-max m-2 p-4  rounded-md">
      {/* {home ? ( */}
        <form onSubmit={handleLogin}>
          <h3 className="ml-28 text-red-600 m-2">LogIn</h3>
          <div className="m-2 p-2">
            <label>Email</label>
            <input
              type="email"
              className="m-2 p-2"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
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
          <Link  to="/admin"  className="bg-green-400 ml-4 rounded-md p-2">
            Already Register
          </Link>
          
        </form>
    
    </div>
  );
}

export default Login;