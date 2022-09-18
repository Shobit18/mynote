import path from "path";
import React from "react";
import { ReactDOM } from "react";
import { Link } from 'react-router-dom';


function Header() {

  const getDataFromLocal = JSON.parse(localStorage.getItem("header") || "[]");
  console.log(getDataFromLocal)
 
  return (
    <div className=" w-full flex justify-between bg-gray-300 h-28 shadow-md items-center">
      <Link to="/" className=" ml-10 ">

       {/* <img src={getDataFromLocal.header.logo.url}  className="rounded-full h-16 w-16"/> */}
      </Link>
      <div className="flex space-x-6 mr-10 text-xl">
        {
          getDataFromLocal.map((localData: any) => {
            return (
              <div>
                 {/* { localData.checked ?  */}
              {/* <div>   */}
               
               {/* <div>  */}
                {/* <Link to= {localData.routes}>
                  { localData.isVisible ? localData.title: "" }
                </Link> */}
                {/* <h1>{localData.title}</h1> */}
                {/* </div>  */}
               {/* </div>  : ""} */}
               <h1>{localData.title}</h1>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Header;
