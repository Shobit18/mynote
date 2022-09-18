// import { Button, input, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



function AddBanner() {
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

    const handleSubmit = () => {
        console.log({ title, description, image, button })

        const _banner = localStorage.getItem('banner') && (localStorage.getItem('banner') || "[]").length > 0 ? JSON.parse(localStorage.getItem('banner') || "[]") : []

        localStorage.setItem('banner', JSON.stringify([..._banner, { title, description, image, button }]))

        navigate('/HomeBanner')
    }

    return (
        <>
            <h1> Adds Banner </h1>
            <label>Title</label>
            <input value={title} onChange={(e) => handleTitleChange(e)} /> <br />
            <label>Description</label>
            <input value={description} onChange={(e) => handleDescChange(e)}  />   <br />
            <label>Image</label>
            <input value={image} onChange={(e) => handleImageChange(e)} /> <br />
            <label>button </label>
            <input value={button} onChange={(e) => handleButtonChange(e)}  />   <br />
            <button onClick={handleSubmit}  > ADD </button>
        </>
    )
}

export default AddBanner