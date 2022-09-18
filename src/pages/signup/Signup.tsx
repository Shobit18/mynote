import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "../login/Login";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  function handleFormSubmit(e: any) {
    e.preventDefault();

    if (!name || !email || !password) {
      
      alert("Enter name email and Password")
    } else {
     
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password)
      
      );
      console.log("Saved in Local Storage");
      navigate('/admin/login')

    
    }
  }

  function handleLogin() {
    if (!name || !email || !password) {
    
      alert("Enter name email and  Password")
    } else {
      // navigate('/admin/login')
    }
  

  }




  return (
    <>

      <div className="bg-green-200 w-96 m-4 p-4 shadow-md rounded-md">
       
          <form onSubmit={handleFormSubmit}>
            <h3 className="ml-28 text-red-600 m-2">Register</h3>

            <div className="m-2 p-2">
              <label>Name</label>
              <input
                type="text"
                className="m-2 p-2"
                placeholder="Enter Full Name"
                name="name"
                onChange={(event) => setName(event.target.value)}

              />
            </div>

            <div className="m-2 p-2">
              <label>Email</label>
              <input
                type="email"
                className="m-2 p-2"
                placeholder="Enter email"
                required
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="m-2 p-2">
              <label>Password</label>
              <input
                type="password"
                className="m-2 p-2"
                placeholder="Enter password"
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <button type="submit" onClick={handleFormSubmit} className="bg-green-400 rounded-md p-2">
              Register
            </button>
            {/* <button onClick={handleClick} className="ml-32">
              Already registered{" "}log in?

            </button> */}

          </form>
        {/* ) : ( */}
          {/* <Login /> */}
        {/* )} */}
      </div>

    </>
  );
}

export default Signup;
