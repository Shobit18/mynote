import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../../components/sidebar/sidebar";
import HomeFooter from "../footer/HomeFooter";

function EditHeader() {
    const navigate = useNavigate()

    let getIndex: any = localStorage.getItem('header');
    getIndex = JSON.parse(getIndex);
    const editIndex: any = localStorage.getItem('editIndex');


    const [title, setTitle] = useState(getIndex[editIndex].title);
    const [routes, setRoutes] = useState(getIndex[editIndex].routes);
    const [checked, setChecked] = useState(getIndex[editIndex].checked);

    const [link, setLink] = useState(getIndex[editIndex].subData.routes);
    const [url, setUrl] = useState(getIndex[editIndex].routes);
    const [ischecked, setIschecked] = useState(getIndex[editIndex].ischecked);


    // const [values, setValues] = useState({
    //     link: '',
    //     url: '',
    //     ischecked: '',
    // });
    const subData: any = [];

    const handleLinkChange = (e: any) => {
        setLink(e.target.value)
        // setValues((values) => ({
        //     ...values,
        //     link: e.target.value,
        // }));
    };

    const handleUrlChange = (e: any) => {
        setUrl(e.target.value)

    };

    const handleIscheckedChange = (e: any) => {
        setIschecked(true)

    };

    const handleTitleChange = (e: any) => {
        setTitle(e.target.value)
    }
    const handleRoutesChange = (e: any) => {
        setRoutes(e.target.value)
    }
    const handleCheckedChange = (e: any) => {
        setChecked(!checked)
    }

    subData.push({ link, url, ischecked })
    const handleEdit = () => {
        console.log({ title, routes, checked, index: localStorage.getItem('editIndex') })
        let header = localStorage.getItem('header') && (localStorage.getItem('header') || "[]").length > 0 ? JSON.parse(localStorage.getItem('header') || "[]") : []

        const _header = header.map((header: any, headerInIndex: any) => {
            if (headerInIndex == localStorage.getItem('editIndex')) {
                return { title, routes, subData, checked }
            } else {
                return header
            }
        })
        console.log(_header)
        localStorage.setItem('header', JSON.stringify(_header))
        navigate('/admin/HomeHeader')
    }

    return (
        <>
            <div className="flex">
                <div >
                    <Sidebar />
                </div>
                <div>

                    <h1> Edit header </h1>
                    <form className="m-2 p-2 bg-blue-200">

                        <input type="text" value={title} placeholder="title" onChange={(e) => handleTitleChange(e)} className="m-2 p-2" /> <br />
                        <input type="text" value={routes} placeholder="routes" onChange={(e) => handleRoutesChange(e)} className="m-2 p-2" /><br />
                        <input type="checkbox" onChange={(e) => handleCheckedChange(e)} /><br />

                        <input
                            id="first-name"
                            className="m-2 p-2"
                            type="text"
                            placeholder="link"
                            name="link"
                            value={link}
                            onChange={handleLinkChange}
                        /><br />

                        <input
                            id="last-name"
                            className="m-2 p-2"
                            type="text"
                            placeholder="url"
                            name="url"
                            value={url}
                            onChange={handleUrlChange}
                        /><br />
                        <input
                            id="ischecked"
                            className="m-2 p-2"
                            type="checkbox"
                            placeholder="ischecked"
                            name="ischecked"
                            // value={values.ischecked}
                            onChange={handleIscheckedChange}
                        /><br />

                        <button onClick={handleEdit} className="m-2 p-2 bg-green-200" > Edit Header </button>
                    </form>

                </div>
            </div>
            <hr className="w-screen" />
            <HomeFooter />
        </>
    )
}

export default EditHeader