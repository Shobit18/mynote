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
    const [link, setLink] = useState('');
    const [url, setUrl] = useState('');
    const [ischecked, setIschecked] = useState(false);

    const subData: any = [];
    // const [values, setValues] = useState({
    //     link: '',
    //     url: '',
    //     ischecked: '',
    // });

    const handleTitleChange = (e: any) => {
        setTitle(e.target.value)
    }
    const handleRoutesChange = (e: any) => {
        setRoutes(e.target.value)
    }
    const handleCheckedChange = (e: any) => {
        setChecked(!checked)
    }

    const handleLinkChange = (event: any) => {

        setLink(event.target.value)
        // setValues((values) => ({
        //     ...values,
        //     link: event.target.value,
        // })
        // );
    };

    const handleUrlChange = (event: any) => {
        setUrl(event.target.value)

    };

    const handleIscheckedChange = (event: any) => {
        setIschecked(!ischecked)

    };

    subData.push({id: subData.length, link, url, ischecked })
    const handleSubmit = (e: any) => {
        // e.window.location.reload(true)
        console.log({ title, routes, checked })

        const _header = localStorage.getItem('header') && (localStorage.getItem('header') || "[]").length > 0 ? JSON.parse(localStorage.getItem('header') || "[]") : []
        // debugger
        localStorage.setItem('header', JSON.stringify([..._header, { id: _header.length, title, routes, subData, checked }]))
        // console.log(localStorage.getItem())
        navigate('/admin/HomeHeader')
    }

    return (
        <div>
            <Header />
            <div className="flex">
                <div>
                    {/* <Header /> */}
                    <Sidebar />
                </div>
                <div>

                    <h1> Adds header </h1>

                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => handleTitleChange(e)} className="p-2 m-2 border-2" /> <br />
                    <input type="checkbox" onChange={(e) => handleCheckedChange(e)} className="p-2 m-2" />   <br />
                    <label>routes</label>
                    <input type="text" value={routes} onChange={(e) => handleRoutesChange(e)} className="p-2 m-2 border-2" /><br />

                    <input
                        id="first-name"
                        className="form-field"
                        type="text"
                        placeholder="link"
                        name="link"
                        // value={values.link}
                        onChange={handleLinkChange}
                    />

                    <input
                        id="last-name"
                        className="form-field"
                        type="text"
                        placeholder="url"
                        name="url"
                        // value={values.url}
                        onChange={handleUrlChange}
                    />
                    <input
                        id="ischecked"
                        className="form-field"
                        type="checkbox"
                        placeholder="ischecked"
                        name="ischecked"
                        // value={values.ischecked}
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