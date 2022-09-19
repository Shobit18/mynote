import React from "react";
import { ReactDOM } from "react";


function Footer() {
  const getfooterData = JSON.parse(localStorage.getItem("header") || "[]");
  const currentDate = new Date().getFullYear();
  const getDataFromLocal = JSON.parse(localStorage.getItem("constant") || "[]");
  return (
    <div className=" bottom-0 space-x-6 text-xl h-56">
      <hr></hr>
      <h1>Footer</h1>
      <div className=" p-16 w-full grid grid-cols-3 gap-4">
        <div className="mx-48 flex">
          <div className="mx-48 w-1/2 flex gap-11">
            {
              getfooterData.map((localData: any) => {
                return (
                  <div className="">
                    <h2 className="font-bold">{localData.title}</h2>
                    <div>
                      {
                        getDataFromLocal.footer.homeItems.map((localData: any) => {
                          return (
                            <div>
                              <h3 className="">{localData.name}</h3>
                            </div>
                          )
                        })
                      }
                    </div>
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
