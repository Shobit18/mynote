import React from "react";
import { ReactDOM } from "react";
import HomeFooter from "./HomeFooter";


function Footer() {
  // const getfooterData = JSON.parse(localStorage.getItem("header") || "[]");
  const currentDate = new Date().getFullYear();
  // const getDataFromLocal = JSON.parse(localStorage.getItem("constant") || "[]");
  return (
    <div className=" bottom-0  ">
      <hr></hr>
      <h1>Footer</h1>
      {/* <div className=""> */}
        {/* <div className=" "> */}
          {/* <div className=""> */}
            {/* {
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
            } */}
            <HomeFooter />
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}
      <div className="ml-56 items-center">
        <h1 className="font-bold ml-56">Copyright: &copy; {currentDate}</h1>
      </div>
    </div>
  );
}
export default Footer;
