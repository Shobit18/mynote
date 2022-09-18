// import { Button, input, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function EditTestimonial() {
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

    const handleEdit = () => {
        console.log({ name, designation, content, image, checked, index: localStorage.getItem('editIndex') })
        let getTestimonial = localStorage.getItem('testimonial') && (localStorage.getItem('testimonial')||"[]").length > 0 ? JSON.parse(localStorage.getItem('testimonial') || "[]") : []

        const _testimonial = getTestimonial.map((testimonial:any, testimonialInIndex:any) => {
            if (testimonialInIndex == localStorage.getItem('editIndex')) {
                return { name, designation, content, image, checked }
            } else {
                return testimonial
            }
        })
        console.log(_testimonial)
        localStorage.setItem('testimonial', JSON.stringify(_testimonial))
        navigate('/HomeTestimonial')
    }

    return (
        <>
            <h1> Edit testimonial </h1>
            <label>Name</label>
            <input value={name} onChange={(e) => handleNameChange(e)}  /> <br />
            <label>Designation</label>
            <input value={designation} onChange={(e) => handleDesignationChange(e)}  /> <br />
            <label>Content</label>
            <input value={content} onChange={(e) => handleContentChange(e)}  /> <br />
            <label>Image</label>
            <input value={image} onChange={(e) => handleImageChange(e)}  /> <br />
            <label>Checkbox</label>
            <input  onChange={(e) => handleCheckedChange(e)}  />
            <button onClick={handleEdit} > Edit </button>

        </>
    )
}

export default EditTestimonial