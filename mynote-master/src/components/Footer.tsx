import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";


function Footer() {
  const getDataFromLocal = JSON.parse(localStorage.getItem("footer") || "[]");
  const currentDate = new Date().getFullYear();

  return (
      <div className="">
        <div className="">
          <div className="">
            <div className="m-12 p-2 grid grid-cols-3 gap-4">
              {
                getDataFromLocal.map((localData: any) => {
                  if(localData.checked) {
                  return (
                    <div>
                      {/* <h2 className="font-bold">{localData.title}</h2> */}
                      <Link to={localData.routes} className="">
                      <h2 className="font-bold">{localData.title}</h2>
                      </Link>
                      
                    </div>
                  )
                  }
                })
              }
            </div>
            {/* <div className="mx-48 w-1/2">
              {
                getDataFromLocal.footer.homeItems.map((localData: any) => {
                  return (
                    <div>
                      <h2 className="font-bold">{localData.name}</h2>
                    </div>
                  )
                })
              }
            </div>
            <div className="mx-48 w-1/2">
              {
                getDataFromLocal.footer.SocialMedia.map((localData: any) => {
                  return (
                    <div>
                      <h2 className="font-bold">{localData.name}</h2>
                    </div>
                  )
                })
              }
            </div> */}
          </div>
        </div>
        <div className="ml-56 items-center">
        <h1 className="font-bold ml-56">Copyright: &copy; {currentDate}</h1>
        </div>
      </div>
  );
}
export default Footer;
