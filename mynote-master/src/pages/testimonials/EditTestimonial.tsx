import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../../components/sidebar/sidebar";
import HomeFooter from "../footer/HomeFooter";


function EditTestimonial() {
    const navigate = useNavigate()

    let getIndex: any = localStorage.getItem('testimonial');
    getIndex = JSON.parse(getIndex);

    const editIndex: any = localStorage.getItem('editIndex');

    const [name, setName] = useState(getIndex[editIndex].name);
    const [designation, setDesignation] = useState(getIndex[editIndex].designation);
    const [content, setContent] = useState(getIndex[editIndex].content);
    const [image, setImage] = useState(getIndex[editIndex].image);
    const [checked, setChecked] = useState(getIndex[editIndex].checked);

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

    const handleEdit = () => {
        // console.log({ name, designation, content, image, checked, index: localStorage.getItem('editIndex') })
        let getTestimonial = localStorage.getItem('testimonial') && (localStorage.getItem('testimonial') || "[]").length > 0 ? JSON.parse(localStorage.getItem('testimonial') || "[]") : []
        const _testimonial = getTestimonial.map((testimonial: any, testimonialInIndex: any) => {
            if (testimonialInIndex == localStorage.getItem('editIndex')) {
                return {  name, designation, content, image, checked }
            } else {
                return testimonial
            }
        })
        console.log(_testimonial)
        localStorage.setItem('testimonial', JSON.stringify(_testimonial))
        navigate('/admin/HomePage')
    }

    return (
        <>
        <div className="flex">
            <div>
                <Sidebar />
            </div>
            <div>


            <h1> Edit testimonial </h1>
            <form className="bg-blue-200 m-2 p-2">
                <label>Image</label>
                <input type="file" value={image} onChange={(e) => handleImageChange(e)} className=" m-2 p-2 h-32 w-28 border-2" /> <br />
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => handleNameChange(e)} className=" m-2 p-2  border-2" /> <br />
                <label>Designation</label>
                <input type="text" value={designation} onChange={(e) => handleDesignationChange(e)} className=" m-2 p-2  border-2" /> <br />
                <label>Content</label>
                <input type="text" value={content} onChange={(e) => handleContentChange(e)} className=" m-2 p-2  border-2" /> <br />
                <label>Checkbox</label>
                <input type="checkbox" value={checked} onChange={(e) => handleCheckedChange(e)} className=" m-2 p-2  border-2" /><br />
                <button onClick={handleEdit} className=" m-2 p-2  border-2 bg-green-200" > Edit Testimonial </button>
            </form>
            </div>
        </div>
        <hr className="w-screen" />
        <HomeFooter />
        </>
    )
}

export default EditTestimonial