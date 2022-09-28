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
            <button
              onClick={() => {
                navigate('/admin/AddHeader')
              }}
              className="rounded-md bg-blue-200 p-2"
            > ADD header Content </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
