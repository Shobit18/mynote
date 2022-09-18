import React, { useState } from "react";
import { idText } from "typescript";
// import "./form.scss";

const NavForm = () => {

    // const navData:any = [];
    const [title, setTitle] = useState('');
    const [routes, setroutes] = useState('');
    const [checked, setChecked] = useState(false);


    var navData = JSON.parse(localStorage.getItem('navData') || "[]")
    function saveData(e: any) {
        e.preventDefault()
        var data = {
            title: title,
            routes: routes,
            checked: checked
        }
        navData.push(data)

        localStorage.setItem('navData', JSON.stringify(navData))

    }
    return (
        <>
            <div className="bg-white">
                <h1 className="bg-green-200 rounded-md w-48 m-2 p-2">Nav Data</h1>

                <div className="m-2 p-2">
                    <form>
                        {/* <div>
                            <label>ID</label>
                            <input type="number" value={id} onChange={(e) => { setId(e.target.value) }} />
                        </div> */}
                        <div className="m-2 p-2">
                            <label>title</label>
                            <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="border-2 m-2"/>
                        </div>
                        <div className="m-2 p-2">
                            <label>AddRoutes</label>
                            <input type="text" value={routes} onChange={(e) => { setroutes(e.target.value) }} className="border-2 m-2"/>
                        </div>
                        <div className="m-2 p-2">
                            <input
                                type="checkbox"
                                onChange={(e) => setChecked(true)}
                            />
                        </div>

                        <button type="submit" onClick={saveData} className="rounded-md p-2 bg-blue-300">Submit</button>
                        {/* <button type="button" onClick={getData}>Get Data</button> */}
                    </form>
                </div>
            </div>
        </>
    );
};

export default NavForm;