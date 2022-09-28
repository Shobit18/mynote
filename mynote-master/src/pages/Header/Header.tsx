import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";
import HomeHeader from "./HomeHeader";

const Header = () => {
    return (
        <div>
            <div className="m-2">
                <h1 className="font-bold m-2">Menu:</h1>

                <Sidebar />
                <HomeHeader />
            </div>
        </div>
    );
};

export default Header;


