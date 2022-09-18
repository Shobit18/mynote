import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

import "./sidebar.scss";
// import NavModal from "../navbar/NavModal";
import HeaderModal from "../../pages/Header/HeaderModal";

const Sidebar = () => {
  // const [modalOpen, setModalOpen] = useState(false);
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
            {/* <span>Dashboard</span> */}
          
          </li>
        <li>
         <Link to="/" className="title">Header</Link>
          </li>
            <li>
          <Link to="/admin/homePage" className="title">Home</Link>
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
                    navigate('/AddHeader')
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
