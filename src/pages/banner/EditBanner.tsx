// import { Button, input, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function EditBanner() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [button, setButton] = useState('');


    const handleTitleChange = (e:any) => {
        setTitle(e.target.value)
    }
    const handleDescChange = (e:any) => {
        setDescription(e.target.value)
    }
    const handleImageChange = (e:any) => {
        setImage(e.target.value)
    }
    const handleButtonChange = (e:any) => {
        setButton(e.target.value)
    }

    const handleEdit = () => {
        console.log({ title, description, image, button, index: localStorage.getItem('editIndex') })
        let banner = localStorage.getItem('banner') && (localStorage.getItem('banner')||"[]").length > 0 ? JSON.parse(localStorage.getItem('banner') || "[]") : []

        const _banner = banner.map((banner:any, bannerInIndex:any) => {
            if (bannerInIndex == localStorage.getItem('editIndex')) {
                return { title, description, image, button }
            } else {
                return banner
            }
        })
        console.log(_banner)
        localStorage.setItem('banner', JSON.stringify(_banner))
        navigate('/HomeBanner')
    }

    return (
        <>
            <h1> Edit banner </h1>
            <input value={title} placeholder="title" onChange={(e) => handleTitleChange(e)}  /> <br />
            <input value={description} placeholder="desc" onChange={(e) => handleDescChange(e)}  /><br />
            <input value={image} placeholder="image" onChange={(e) => handleImageChange(e)}  /> <br />
            <input value={button} placeholder="button" onChange={(e) => handleButtonChange(e)}  /> <br />
            <button onClick={handleEdit} > Edit </button>

        </>
    )
}

export default EditBanner