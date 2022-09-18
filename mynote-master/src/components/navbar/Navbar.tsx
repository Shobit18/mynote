import "./Navbar.scss";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    // const [checked, setChecked] = useState(false);
    const getNavData = JSON.parse(localStorage.getItem("navData") || "[]");
    console.log("navData:", getNavData)

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="items">
                    {
                        getNavData.map((navData: any) => {
                            return (
                                <div>
                                    {navData.checked ?
                                        <div className="flex">
                                            <div>
                                                <Link to={navData.routes} className="item">
                                                    {navData.title}
                                                </Link>
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                        : ""}
                                </div>
                            )
                        })
                    }

                    <div className="item">
                        <img
                            src="
                            https://picsum.photos/200/300"
                            alt=""
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
