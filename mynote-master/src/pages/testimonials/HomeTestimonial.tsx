import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
function HomeTestimonial() {
    const navigate = useNavigate()
    const [testimonial, settestimonial] = useState([])

    useEffect(() => {
        const testimonial = localStorage.getItem('testimonial') || "";
        settestimonial(JSON.parse(testimonial || "[]"));
    }, [testimonial])

    const handleDelete = (testimonialOutIndex: any) => {
        const _testimonial = testimonial.filter((testimonial: any, testimonialInIndex: any) => {
            if (testimonialInIndex !== testimonialOutIndex) {
                return testimonial
            }
        })
        // console.log(_testimonial)
        settestimonial(_testimonial)
        localStorage.setItem('testimonial', JSON.stringify(_testimonial))
    }

    const handleEdit = (testimonialIndex: any) => {
        localStorage.setItem('editIndex', testimonialIndex)
        navigate("/admin/EditTestimonial")
    }

    return (
        <>
            <br />
            <button
                onClick={() => {
                    navigate('/admin/AddTestimonial')
                }}
                className="bg-blue-200 rounded-md p-2"
            > ADD testimonial </button>
            <br />
            <div className="grid grid-cols-2 gap-4   border-slate-600">

                {
                    testimonial && testimonial.length > 0 ?
                        testimonial.map((testimonial: any, testimonialIndex: any) => {
                            return (
                                <div className="p-2 m-2 shadow-md w-96">

                                    <div className="border-2 w-full m-2 p-2 ">
                                        <div className=" p-2 m-2 w-24 h-24 border-2">
                                            image : {testimonial.image}
                                        </div>
                                        <div className=" p-2 m-2 w-48 font-bold uppercase">
                                            Name: {testimonial.name}</div>
                                        <div className=" p-2 m-2 48 font-bold">
                                            Desi : {testimonial.designation}
                                        </div>
                                        <div className=" p-2 m-2 48">
                                            content: {testimonial.content}</div>
                                        <div className=" p-2 m-2 ">
                                            checkbox : {(testimonial.checked) ? "checked": "unchecked"}
                                        </div>
                                        <button className="bg-blue-200 p-2" onClick={() => handleEdit(testimonialIndex)} >Edit</button>
                                        <button className="bg-red-200 p-2" onClick={() => handleDelete(testimonialIndex)} >Delete</button>
                                    </div>
                                </div>
                            )
                        })
                        :
                        'No Data found'
                }
            </div>
        </>
    )
}

export default HomeTestimonial
