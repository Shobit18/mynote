import React from "react";
import { ReactDOM } from "react";
import HomeFooter from "./HomeFooter";


function Footer() {
  // const getfooterData = JSON.parse(localStorage.getItem("header") || "[]");
  const currentDate = new Date().getFullYear();
  // const getDataFromLocal = JSON.parse(localStorage.getItem("constant") || "[]");
  return (
    <div className=" bottom-0  ">
      <hr></hr>
      <h1>Footer</h1>
      
            <HomeFooter />
        
      <div className="ml-56 items-center">
        <h1 className="font-bold ml-56">Copyright: &copy; {currentDate}</h1>
      </div>
    </div>
  );
}
export default Footer;
