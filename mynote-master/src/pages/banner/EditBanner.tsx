// import { Button, input, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../../components/sidebar/sidebar";
import HomeFooter from "../footer/HomeFooter";


function EditBanner() {
    const navigate = useNavigate()

    let getIndex: any = localStorage.getItem('banner');
    getIndex = JSON.parse(getIndex);
    console.log("index: ", +getIndex);
    
    const editIndex: any = localStorage.getItem('editIndex');
    console.log("edit" +editIndex)


    const [title, setTitle] = useState(getIndex[editIndex].title);
    const [description, setDescription] = useState(getIndex[editIndex].description);
    const [image, setImage] = useState(getIndex[editIndex].image);
    const [button, setButton] = useState(getIndex[editIndex].button);


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

    const handleEdit = (index: any) => {
        console.log({ title, description, image, button, index: localStorage.getItem('editIndex') })
        let banner = localStorage.getItem('banner') && (localStorage.getItem('banner') || "[]").length > 0 ? JSON.parse(localStorage.getItem('banner') || "[]") : []

        const _banner = banner.map((banner: any, bannerInIndex: any) => {
            if (bannerInIndex == localStorage.getItem('editIndex')) {
                return { title, description, image, button }
            } else {
                return banner
            }
        })
        console.log(_banner)
        localStorage.setItem('banner', JSON.stringify(_banner))
        navigate('/admin/HomePage')
    }

    return (
        <>
        <div className="flex">
            <div>
                <Sidebar />
            </div>
            <div>

                <h1> Edit banner </h1>
                
                <div className="shodow-md m-2 boder-2 bg-blue-200">
                    <label className="">Image</label>
                    <input type="file" value={image}  onChange={(e) => handleImageChange(e)} className="h-32 w-28 p-2 m-2 border-2 " /> <br />
                    <label className="">title</label>
                    <input type="text" value={title}  onChange={(e) => handleTitleChange(e)} className="p-2 m-2" /> <br />
                    <label className="">Desciption</label>
                    <input type="text" value={description}  onChange={(e) => handleDescChange(e)} className="p-2 m-2" /><br />

                    <input type="text" value={button} placeholder="button" onChange={(e) => handleButtonChange(e)} className="p-2 m-2" /> <br />
                    <button onClick={handleEdit} className="bg-green-200 p-2 m-2" > Edit banner</button>
                </div>
            </div>
        </div>
        <hr className="w-screen" />
        <HomeFooter />
        </>  
    )
}

export default EditBanner