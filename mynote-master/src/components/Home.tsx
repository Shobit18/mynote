import React from "react";
import { ReactDOM } from "react";
import { Link } from 'react-router-dom';
import Footer from "./Footer";
import Header from "./Header";
import Testimonial from "./Testimonial";
// import

function Home() {
  const getDataFromLocal = JSON.parse(localStorage.getItem("banner") || "[]");

  console.log("getDataFromLocal:" + getDataFromLocal)
  // const getConstant = JSON.parse(localStorage.getItem("constant") || "[]");
  // const backgroundImage = `url(${getDataFromLocal.banner.bannerImage})`
  return (
    <div>
      <Header />
      <h1>Banner content</h1>
      {
        getDataFromLocal.map((localData: any) => {

          return (

            <div className="bg-no-repeat  w-screen p-4" >
              
              <div className="w-screen h-max p-4 rounded overflow-hidden shadow-lg bannerImage ">
                <img src="https://picsum.photos/200/300" alt="newimage" className="m-2 h-screen w-screen" />
                <div className="px-6 py-4 ">
                  <div className="font-bold  mb-2 text-orange-400 text-3xl">Title: {localData.title}</div>
                  <p className=" text-red-400 text-2xl">
                    Descr: {localData.description}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <Link className="rounded-full m-3  p-4 items-center bg-orange-400" to="/about">{localData.button}</Link>
                </div>
              </div>
            </div>
          )
        })
      }

      <Testimonial />
      <Footer />

    </div >

  );
}

export default Home;
