import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

import "./sidebar.scss";
const Sidebar = () => {

  const navigate = useNavigate()

  return (
    <div className="sidebar w-auto ">
      <div className="top">
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Dashboard</p>
          <li>
            
          
          </li>
        <li>
         <Link to="/admin/HomeHeader" className="title">Header</Link>
          </li>
            <li>
          <Link to="/admin/HomePage" className="title">Home</Link>
        </li>
        <li>
          <Link to="/admin/contact" className="title">Contact</Link>
        </li>

          <p className="title">USER</p>
          <li>
            
            <span>Logout</span>
          </li>


        <li>
          
          {/* <button
        className="p-2 bg-green-200 rounded-md"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Add Page
      </button> */}

<button 
                onClick={() => {
                    navigate('/admin/AddHeader')
                }}
                className ="rounded-md bg-blue-200 p-2"
                 > ADD header Content </button>

      {/* {modalOpen && <HeaderModal setOpenModal={setModalOpen} />} */}
          </li>  
        </ul>


      </div>
    </div>
  );
};

export default Sidebar;
