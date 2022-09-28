import React from "react";
import { ReactDOM } from "react";
import constant from "../contant";

function AddToLocal() {
  const data = localStorage.setItem('constant', JSON.stringify(constant))
  
  return (
    <div>
        {/* <h1>Hello: {data}</h1> */}
        
    </div>
  );
}

export default AddToLocal;
