import Reac, { useState } from "react";
import { ReactDOM } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import HomeBanner from "../banner/HomeBanner";
import HomeFooter from "../footer/HomeFooter";
import HomeTestimonial from "../testimonials/HomeTestimonial";

function HomePage() {
  // const [updown, setUpdown] = useState('');

  // let getItems:any = []
  // getItems = localStorage.getItem('header') && (localStorage.getItem('header') || "[]").length > 0 ? JSON.parse(localStorage.getItem('header') || "[]") : []
  // const handleDown = (e: any) => {

  //   // const _header = header.map((header: any, headerInIndex: any) => {
  //   //     if (headerInIndex == localStorage.getItem('editIndex')) {
  //   //         return headerInIndex--
  //   //     } else {
  //   //         return header
  //   //     }
  //   // })
  //   // console.log(_header)
  //   // localStorage.setItem('headerIndex', JSON.stringify(_header))
  //   console.log("D clicked");
  //   getItems.push(getItems.shift())
  //   console.log(getItems)

  //   localStorage.setItem("header", JSON.stringify(getItems))
  // }

  // const handleUp = (e: any) => {
  //   console.log("U clicked");
    
  //   for(let i= 0; i< getItems.length; i++) {

  //   }
  //   getItems.unshift(getItems.pop())
  //   console.log(getItems)

  //   localStorage.setItem("header", JSON.stringify(getItems))
  // }

  // function move(index: any, orginalIndex: any) {
  //   var newArray = orginalIndex.splice();
  //   newArray.slice(0, 0, newArray.filter(item => ))
  // }

  
  return (
   <div> 
    <div className=" flex w-screen">
      <Sidebar />
      <div className="  m-4 h-max">
      
      {/* <button onClick={handleUp}>UPS</button><br />
     <button onClick={handleDown}>DOWN</button> */}
        <HomeBanner />

        <hr className="w-screen"/>
        <HomeTestimonial />
        
     
      </div>
    </div>  
    <hr  className="w-screen"/>
    <HomeFooter />
    </div>

  );
}

export default HomePage;
