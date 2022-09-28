import Reac, { useState } from "react";
import { ReactDOM } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/sidebar/sidebar";
import HomeBanner from "../banner/HomeBanner";
import HomeFooter from "../footer/HomeFooter";
import HomeTestimonial from "../testimonials/HomeTestimonial";

function HomePage() {  
  return (
   <div> 
    <Header />
    <div className=" flex  ">
      <Sidebar />
      <div className=" ">
    
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
