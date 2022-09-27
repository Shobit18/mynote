// import { Button, input, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header";
import Sidebar from "../../components/sidebar/sidebar";
import HomeFooter from "../footer/HomeFooter";



function AddTestimonial() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [checked, setChecked] = useState(false);

    const handleNameChange = (e: any) => {
        setName(e.target.value)
    }
    const handleDesignationChange = (e: any) => {
        setDesignation(e.target.value)
    }
    const handleContentChange = (e: any) => {
        setContent(e.target.value)
    }
    const handleImageChange = (e: any) => {
        setImage(e.target.value)
    }
    const handleCheckedChange = (e: any) => {
        setChecked(!checked)
    }

    const handleSubmit = () => {
        // debugger
        console.log({ name, designation, content, image, checked })

        const _testimonial = localStorage.getItem('testimonial') && (localStorage.getItem('testimonial') || "[]").length > 0 ? JSON.parse(localStorage.getItem('testimonial') || "[]") : []

        localStorage.setItem('testimonial', JSON.stringify([..._testimonial, { id: _testimonial.length, name, designation, content, image, checked }]))

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


                    <h1> Add Testimonials  </h1>
                    <form className="bg-blue-200">
                        <label>Image</label>
                        <input type="file" value={image} placeholder="image" onChange={(e) => handleImageChange(e)} className="h-24 w-28 p-2 border-2" /> <br />
                        <label>Name</label>
                        <input type="text" value={name} placeholder="name" onChange={(e) => handleNameChange(e)} className="m-2 p-2 w-96" /> <br />
                        <label>Designation</label>
                        <input type="text" value={designation} placeholder="design" onChange={(e) => handleDesignationChange(e)} className="m-2 p-2 w-96" />   <br />
                        <label>Content</label>
                        <input type="text" value={content} placeholder="Content" onChange={(e) => handleContentChange(e)} className="m-2 p-2 w-96 h-48" />   <br />
                        <label>checkbox</label>
                        <input type="checkbox" onChange={(e) => handleCheckedChange(e)} />   <br />

                        <button onClick={handleSubmit} className="bg-green-200 m-2 p-2"  > ADD Testimonial </button>

                    </form>
                </div>
            </div>
            <hr className="w-screen" />
            <HomeFooter />
        </div>
    )
}

export default AddTestimonial