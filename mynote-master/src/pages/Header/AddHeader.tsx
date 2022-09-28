import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header";
import Sidebar from "../../components/sidebar/sidebar";
import HomeFooter from "../footer/HomeFooter";

function AddHeader() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [routes, setRoutes] = useState('');
    const [checked, setChecked] = useState(false);
    const [linkTitle, setLinkTitle] = useState('');
    const [url, setUrl] = useState('');
    const [ischecked, setIschecked] = useState(false);

    const subData: any = [];
    const handleTitleChange = (e: any) => {
        setTitle(e.target.value)
    }
    const handleRoutesChange = (e: any) => {
        setRoutes(e.target.value)
    }
    const handleCheckedChange = (e: any) => {
        setChecked(!checked)
    }

    const handleLinkTitleChange = (event: any) => {

        setLinkTitle(event.target.value)
    };

    const handleUrlChange = (event: any) => {
        setUrl(event.target.value)

    };

    const handleIscheckedChange = (event: any) => {
        setIschecked(!ischecked)

    };

    subData.push({ id: subData.length, linkTitle, url, ischecked })
    const handleSubmit = (e: any) => {
        console.log({ title, routes, checked })

        const _header = localStorage.getItem('header') && (localStorage.getItem('header') || "[]").length > 0 ? JSON.parse(localStorage.getItem('header') || "[]") : []
        // debugger
        localStorage.setItem('header', JSON.stringify([..._header, { id: _header.length, title, routes, subData, checked }]))
        navigate('/admin/HomeHeader')
    }

    return (
        <div>
            <Header />
            <div className="flex">
                <div>
                    <Sidebar />
                </div>
                <div>

                    <h1> Adds header </h1>

                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => handleTitleChange(e)}
                        className="p-2 m-2 border-2" /> <br />
                    <input
                        type="checkbox"
                        onChange={(e) => handleCheckedChange(e)}
                        className="p-2 m-2" />   <br />
                    <label>routes</label>
                    <input type="text"
                        value={routes}
                        onChange={(e) => handleRoutesChange(e)}
                        className="p-2 m-2 border-2" /><br />
                    <input
                        className="m-2 p-2"
                        type="text"
                        placeholder="linkTitle"
                        name="linkTitle"

                        onChange={handleLinkTitleChange}
                    />
                    <input
                        className="m-2 p-2"
                        type="text"
                        placeholder="url"
                        name="url"
                        onChange={handleUrlChange}
                    />
                    <input
                        id="ischecked"
                        className="m-2 p-2"
                        type="checkbox"
                        placeholder="ischecked"
                        name="ischecked"
                        onChange={handleIscheckedChange}
                    />

                    <button onClick={handleSubmit} className="bg-blue-200 p-2 m-2"> ADD Page</button>

                </div>
            </div>
            <hr className="w-screen" />
            <HomeFooter />
        </div>
    )
}

export default AddHeader