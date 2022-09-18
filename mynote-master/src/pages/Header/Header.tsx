import React, { useState } from "react";
import { Link } from "react-router-dom";
// import HeaderModal from "./HeaderModal";
import HomeHeader from "./HomeHeader";

const Header = () => {
    // const [title, setTitle] = useState('');
    // const [checked, setChecked] = useState(false);
    
    // const [modalOpen, setModalOpen] = useState(false);
    // let getNavData = JSON.parse(localStorage.getItem('navData') || "[]");
    // // console.log("img", +getNavData.header.logo)
    // function saveData(e: any) {
    //     e.preventDefault()
    //     let data = {
    //         title: title,
    //         // description: description,
    //         // image: image,
    //         // button: button
            
    //     }
    //     getNavData.push(data)
    //     localStorage.setItem('navData', JSON.stringify(getNavData))
    // }

    // const getUpdateData = JSON.parse(localStorage.getItem("updateHeader") || "[]");

    return (
        <div>
        {/* <div className="shodow-md w-screen m-2">

    
            <Link to="/" className=" ml-10  ">

                <img src="{getNavData.header.logo.url}" className="rounded-full h-16 w-16" />
            </Link>
          </div>   */}
            {/* <button>Add Page:</button> */}
            {/* <button
                className="openModalBtn"
                onClick={() => {
                    setModalOpen(true);
                }}
            >
                Add Page
            </button>

            {modalOpen && <HeaderModal setOpenModal={setModalOpen} />} */}

<div className="m-2">
<h1 className="font-bold m-2">Menu:</h1>
            {/* <div className="w-sceen">
                {
                    getNavData.map((navData: any) => {
                        return (
                           <div> 
                            {navData.checked ? 
                            <div className="flex space-x-4 w-screen">
                                <form>
                                    <div className="flex space-x-4 w-screen">
                                        <input type="text"  name="title" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder={navData.title} className="p-2 m-2 border-2  " />
                                        <input type="checkbox" value={navData.checked ? "true" : ""} className= "shodow-md border-2  m-4" />
                                        {/* <button className= "shodow-md border-2  m-4" onClick={saveData}>Edit</button> */}
                                    {/* </div>
                                    <div> */}
                                        {/* <p>Path: { navData.routes}</p> */}
                                    {/* </div>
                                    <div>

                                    </div>
                                </form>
                            </div> : ""} */}
                          {/* </div>   */}
                        {/* )
                    }) */}
    
                {/* } */}
                {/* <button onClick={saveData} >Edit</button> */}

            {/* </div> */} 
<HomeHeader />            
</div>


            {/* <button>Update Pages</button> */}
        </div>


    );
};

export default Header;


