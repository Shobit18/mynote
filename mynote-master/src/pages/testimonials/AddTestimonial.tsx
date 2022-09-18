// import { Button, input, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



function AddTestimonial() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [checked, setChecked] = useState(false);

    const handleNameChange = (e:any) => {
        setName(e.target.value)
    }
    const handleDesignationChange = (e:any) => {
        setDesignation(e.target.value)
    }
    const handleContentChange = (e:any) => {
        setContent(e.target.value)
    }
    const handleImageChange = (e:any) => {
        setImage(e.target.value)
    }
    const handleCheckedChange = (e:any) => {
        setChecked(true)
    }

    const handleSubmit = () => {
        console.log({ name, designation, content, image, checked })

        const _testimonial = localStorage.getItem('testimonial') && (localStorage.getItem('testimonial') || "[]").length > 0 ? JSON.parse(localStorage.getItem('testimonial') || "[]") : []

        localStorage.setItem('testimonial', JSON.stringify([..._testimonial, { name, designation, content, image, checked }]))

        navigate('/HomeTestimonial')
    }

    return (
        <>
            <h1> AddTestimonials BLOG </h1>
            <label>Name</label>
            <input value={name} placeholder="name" onChange={(e) => handleNameChange(e)} /> <br />
            <label>Designation</label>
            <input value={designation} placeholder="design" onChange={(e) => handleDesignationChange(e)}  />   <br />
            <label>Content</label>
            <input value={content} placeholder="Content" onChange={(e) => handleContentChange(e)}  />   <br />
            <label>Image</label>
            <input value={image} placeholder="image" onChange={(e) => handleImageChange(e)} /> <br />
            <label>checkbox</label>
            <input  placeholder="checkbox" onChange={(e) => handleCheckedChange(e)}  />   <br />
            
            <button onClick={handleSubmit}  > SUBMIT </button>
        </>
    )
}

export default AddTestimonial