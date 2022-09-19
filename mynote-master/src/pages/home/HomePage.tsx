import Reac, { useState } from "react";
import { ReactDOM } from "react";
import Sidebar from "../../components/sidebar/sidebar";
import HomeBanner from "../banner/HomeBanner";
import HomeTestimonial from "../testimonials/HomeTestimonial";

function HomePage() {
  return (
   <div> 
    <div className=" flex w-max">
      <Sidebar />
      <div className="  m-4 h-max">
      
        <HomeBanner />

        <hr 
        style={{
          background: 'lime',
          color: 'lime',
          borderColor: 'lime',
          height: '3px',
          margin: "8px"
        }}
        />
        <HomeTestimonial />
     
      </div>
    </div>  

    </div>

  );
}

export default HomePage;
