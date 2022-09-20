import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../../components/sidebar/sidebar";
import HomeFooter from "./HomeFooter";



function AddFooter() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [routes, setRoutes] = useState('');
    const [checked, setChecked] = useState(false);


    const handleTitleChange = (e: any) => {
        setTitle(e.target.value)
    }
    const handleRoutesChange = (e: any) => {
        setRoutes(e.target.value)
    }
    const handleCheckedChange = (e: any) => {
        setChecked(true)
    }

    const handleSubmit = () => {
        console.log({ title, routes, checked })

        const _footer = localStorage.getItem('footer') && (localStorage.getItem('footer') || "[]").length > 0 ? JSON.parse(localStorage.getItem('footer') || "[]") : []

        localStorage.setItem('footer', JSON.stringify([..._footer, { title, routes, checked }]))

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
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => handleTitleChange(e)} className="p-2 m-2 border-2" /> <br />
                    <label>routes</label>
                    <input type="text" value={routes} onChange={(e) => handleRoutesChange(e)} className="p-2 m-2 border-2" />   <br />
                    <input type="checkbox" onChange={(e) => handleCheckedChange(e)} className="p-2 m-2" />   <br />

                    <button onClick={handleSubmit} className="bg-blue-200 p-2 m-2"> ADD Footer</button>
                </div>
            </div>
            <hr className="w-screen" />
            <HomeFooter />
        </>
    )
}

export default AddFooter