import React from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";


function Footer() {
  const getDataFromLocal = JSON.parse(localStorage.getItem("header") || "[]");
  const currentDate = new Date().getFullYear();

  return (
    <div className="">
      <div className="">
        <div className="">
          <div className="m-12 p-2 grid grid-cols-3 gap-4">
            {
              getDataFromLocal.map((localData: any) => {
                if (localData.checked) {
                  return (
                    <div>
                      <h1 className="font-bold">{localData.title}</h1>
                      {
                        localData.subData.map((sub: any) => {
                          if (sub.ischecked) {
                            return (
                              <div>
                                <a href= {sub.url} className="" target='_blank' >{sub.linkTitle}</a>
                              </div>
                            )
                          }
                        })
                      }

                    </div>
                  )
                }
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
