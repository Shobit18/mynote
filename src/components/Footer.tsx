import React from "react";
import { ReactDOM } from "react";


function Footer() {
  const getDataFromLocal = JSON.parse(localStorage.getItem("constant") || "[]");
  const currentDate = new Date().getFullYear();

  return (
      <div className="space-x-6 text-xl h-72">
        <div className=" p-16 w-full grid grid-cols-3 gap-4">
          <div className="mx-48 flex">
            <div className="mx-48 w-1/2">
              {
                getDataFromLocal.footer.navItems.map((localData: any) => {
                  return (
                    <div>
                      <h2 className="font-bold">{localData.title}</h2>
                    </div>
                  )
                })
              }
            </div>
            <div className="mx-48 w-1/2">
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
            </div>
          </div>
        </div>
        <div className="ml-56 items-center">
        <h1 className="font-bold ml-56">Copyright: &copy; {currentDate}</h1>
        </div>
      </div>
  );
}
export default Footer;
