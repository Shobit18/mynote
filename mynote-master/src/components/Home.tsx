import React from "react";
import { ReactDOM } from "react";
import { Link } from 'react-router-dom';
import Footer from "./Footer";
import Testimonial from "./Testimonial";

function Home() {
  const getDataFromLocal = JSON.parse(localStorage.getItem("banner") || "[]");

  console.log("getDataFromLocal:" +getDataFromLocal)
  // const getConstant = JSON.parse(localStorage.getItem("constant") || "[]");
  // const backgroundImage = `url(${getDataFromLocal.banner.bannerImage})`
  return (
    <div>
      {
        getDataFromLocal.map((localData:any) => {
          
          return (

      <div className="bg-no-repeat w-full h-max" >
        <div className="w-96 h-max p-4 rounded overflow-hidden shadow-lg  ">
          <div className="px-6 py-4 mt-48">
            <div className="font-bold  mb-2 text-orange-400 text-3xl">Title: {localData.title}</div>
            <p className=" text-red-400 text-2xl">
              Descr: {localData.description}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <Link className="rounded-full m-3  p-4 items-center bg-orange-400"  to="/about">{localData.button}</Link>
          </div>
        </div>
      </div>
          )
        })
      }
      {/* style={{  backgroundImage: `url(${getConstant.banner.bannerImage})`}} */}
      <Testimonial />

      {/* Footer */}
      <Footer />
    </div >

  );
}

export default Home;
