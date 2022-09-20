import Reac, { useState } from "react";
import { ReactDOM } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import HomeBanner from "../banner/HomeBanner";
import HomeFooter from "../footer/HomeFooter";
import HomeTestimonial from "../testimonials/HomeTestimonial";

function HomePage() {
  // const [updown, setUpdown] = useState('');

  // const handleUp = (e: any) => {
  //   let getIndex: any = localStorage.getItem('header');
  //   getIndex = JSON.parse(getIndex);
  //   const editIndex: any = localStorage.getItem('editIndex');
  // }

  // function move(index: any, orginalIndex: any) {
  //   var newArray = orginalIndex.splice();
  //   newArray.slice(0, 0, newArray.filter(item => ))
  // }

  
  return (
   <div> 
    <div className=" flex w-max">
      <Sidebar />
      <div className="  m-4 h-max">
      
      <button>UPS and Down</button>
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
