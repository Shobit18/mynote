import React from "react";
import { ReactDOM } from "react";


function Testimonial() {
    const getDataFromLocal = JSON.parse(localStorage.getItem("testimonial") || "[]");
    console.log("test", +getDataFromLocal.name)
  return (
    <div>
        {/* <h1>Hello: {data}</h1> */}
        <hr
       className="w-screen"
      />
        <h3 className="font-bold mx-auto text-3xl m-4 p-4 ">Testimonials </h3>
        <div className="grid grid-cols-2 gap-4 shadow-md border-slate-600">
        {

          getDataFromLocal.map((localData: any) => {
            if(localData.checked) {
            return (
            <div>  
        
              <div className="w-full border-2 m-2 shadow-md rounded-md">
                
                <div className=" m-4">
                  <div className=" p-4">
                    <img src={localData.image} alt="profile image" className="  rounded-full" />
                  </div>
                  
                  <div className="m-4">
                    <p className="text-gray-600 font-bold text-3xl uppercase p-2">Name:{localData.name}</p>
                    <div className="text-gray-600 font-bold p-2">Designation: {localData.designation}</div>
                    <div className="text-gray-900   mt-6">Content: {localData.content}</div>
                  </div>
                
                </div> 
              </div> 
            </div>  
            )}
          })
        }
      </div>
        
    </div>
  );
}

export default Testimonial;
