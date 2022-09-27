import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../../components/sidebar/sidebar";
import HomeFooter from "./HomeFooter";



function AddFooter() {
    const navigate = useNavigate()
    // const [title, setTitle] = useState('');
    // const [ url, setUrl] = useState('')
    // const [routes, setRoutes] = useState('');
    // const [checked, setChecked] = useState(false);


    // const handleTitleChange = (e: any) => {
    //     setTitle(e.target.value)
    // }
    // const handleRoutesChange = (e: any) => {
    //     setRoutes(e.target.value)
    // }
    // const handleUrlChange = (e: any) => {
    //     setUrl(e.target.value)
    // }
    // const handleCheckedChange = (e: any) => {
    //     setChecked(!checked)
    // }

    const [values, setValues] = useState([{
        link: '',
        url: '',
        ischecked: '',
    }]);


    // const handleTitleChange = (e: any) => {
    //     setTitle(e.target.value)
    // }
    // const handleRoutesChange = (e: any) => {
    //     setRoutes(e.target.value)
    // }
    // const handleCheckedChange = (e: any) => {
    //     setChecked(!checked)
    // }

    const handleLinkInputChange = (event: any) => {

        setValues((values) => ({
            ...values,
            link: event.target.value,
        }));
    };

    const handleUrlInputChange = (event: any) => {

        setValues((values) => ({
            ...values,
            url: event.target.value,
        }));
    };

    const handleIscheckedInputChange = (event: any) => {

        setValues((values) => ({
            ...values,
            ischecked: event.target.value,
        }));
    };

    const handleSubmit = () => {
        // console.log({ title, routes, checked })

        // const _footer = localStorage.getItem('footer') && (localStorage.getItem('footer') || "[]").length > 0 ? JSON.parse(localStorage.getItem('footer') || "[]") : []
        const _footer = localStorage.getItem('header') && (localStorage.getItem('header') || "[]").length > 0 ? JSON.parse(localStorage.getItem('header') || "[]") : []

        // localStorage.setItem('footer', JSON.stringify([..._footer, { title, routes, url, checked }]))
        localStorage.setItem('header', JSON.stringify([..._footer, { values }]))

        navigate('/admin/HomePage')
    }

    return (
        <>
            <div className="flex">
                <div>
                    <Sidebar />
                </div>
                <div>
                    <h1> Adds footer </h1>
                    {/* <label>Title</label>
                    <input type="text" value={title} onChange={(e) => handleTitleChange(e)} className="p-2 m-2 border-2" /> <br />
                    <label>Link</label>
                    <input type="text" value={routes} onChange={(e) => handleRoutesChange(e)} className="p-2 m-2 border-2" />   <br />
                    <label>URL</label>
                    <input type="text" value={url} onChange={(e) => handleUrlChange(e)} className="p-2 m-2 border-2" />   <br />
                    <input type="checkbox" onChange={(e) => handleCheckedChange(e)} className="p-2 m-2" />   <br /> */}
                    <input
                        id="first-name"
                        className="form-field"
                        type="text"
                        placeholder="link"
                        name="link"
                        // value={values.link}
                        onChange={handleLinkInputChange}
                    />

                    <input
                        id="last-name"
                        className="form-field"
                        type="text"
                        placeholder="url"
                        name="url"
                        // value={values.url}
                        onChange={handleUrlInputChange}
                    />
                    <input
                        id="ischecked"
                        className="form-field"
                        type="checkbox"
                        placeholder="ischecked"
                        name="ischecked"
                        // value={values.ischecked}
                        onChange={handleIscheckedInputChange}
                    />

                    <button onClick={handleSubmit} className="bg-blue-200 p-2 m-2"> ADD Footer</button>
                </div>
            </div>
            <hr className="w-screen" />
            <HomeFooter />
        </>
    )
}

export default AddFooter