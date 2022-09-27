import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header";
import Sidebar from "../../components/sidebar/sidebar";
import HomeFooter from "../footer/HomeFooter";



function AddBanner() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [button, setButton] = useState('');

    const handleTitleChange = (e: any) => {
        setTitle(e.target.value)
    }
    const handleDescChange = (e: any) => {
        setDescription(e.target.value)
    }
    const handleImageChange = (e: any) => {
        setImage(e.target.value)
    }
    const handleButtonChange = (e: any) => {
        setButton(e.target.value)
    }

    const handleSubmit = () => {
        console.log({ title, description, image, button })

        const _banner = localStorage.getItem('banner') && (localStorage.getItem('banner') || "[]").length > 0 ? JSON.parse(localStorage.getItem('banner') || "[]") : []

        localStorage.setItem('banner', JSON.stringify([..._banner, { title, description, image, button }]))

        navigate('/admin/HomePage')
    }

    return (
        <div>
            <Header />
            <div className="flex">
                <div>
                    <Sidebar />
                </div>
                <div>

                    <h1> Adds Banner </h1>
                    <form className="bg-blue-200 shadow-md">
                        <label>image </label>
                        <input type="file" value={image} onChange={(e) => handleImageChange(e)} className="m-2 p-2 h-32 w-28 border-2" /> <br />
                        <label>Title</label>
                        <input type="text" value={title} onChange={(e) => handleTitleChange(e)} className="m-2 p-2" /> <br />
                        <label>Description</label>
                        <input type="text" value={description} onChange={(e) => handleDescChange(e)} className="m-2 p-2 " />   <br />
                        <label>button</label>
                        <input type="text" value={button} onChange={(e) => handleButtonChange(e)} className="m-2 p-2" />   <br />
                        <button onClick={handleSubmit} className="bg-green-200 p-2 m-2"> ADD  banner</button>
                    </form>
                </div>
            </div>
            <hr className="w-screen" />
            <HomeFooter />
        </div>
    )
}

export default AddBanner