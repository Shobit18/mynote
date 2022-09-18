// import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// import DeleteIcon from '@mui/icons-material/Delete'
// import EditIcon from '@mui/icons-material/Edit';

function HomeTestimonial() {
    const navigate = useNavigate()
    const [testimonial, settestimonial] = useState([])

    useEffect(() => {
        const testimonial  = localStorage.getItem('testimonial') ||"";
        settestimonial(JSON.parse(testimonial || "[]")); 
    }, [testimonial])

    const handleDelete = (testimonialOutIndex: any) => {
        const _testimonial = testimonial.filter((testimonial:any, testimonialInIndex:any) => {
            if (testimonialInIndex !== testimonialOutIndex) {
                return testimonial
            }
        })
        console.log(_testimonial)
        settestimonial(_testimonial)
        localStorage.setItem('testimonial', JSON.stringify(_testimonial))
    }

    const handleEdit = (testimonialIndex:any) => {
        localStorage.setItem('editIndex', testimonialIndex)
        navigate("/EditTestimonial")
    }



    return (
        <>
            <br />
            <button
                onClick={() => {
                    navigate('/AddTestimonial')
                }}
                // variant="contained" > ADD testimonial </button>
                 > ADD testimonial </button>
            <br />

            {
                testimonial && testimonial.length > 0 ?
                    testimonial.map((testimonial:any, testimonialIndex:any) => {
                        return (
                            <div style={{ borderBottom: "1px solid #eee", margin: '10px 0px' }}>
                                <span style={{
                                    display: 'inline-block',
                                    minWidth: '200px'
                                }}>
                                   Name: {testimonial?.name }</span>
                                <span style={{
                                    display: 'inline-block',
                                    minWidth: '280px'
                                }}>
                                   Desi : {testimonial?.designation}
                                </span>
                                <span style={{
                                    display: 'inline-block',
                                    minWidth: '200px'
                                }}>
                                   content: {testimonial?.content }</span>
                                <span style={{
                                    display: 'inline-block',
                                    minWidth: '280px'
                                }}>
                                   image : {testimonial?.image}
                                </span>
                                <span style={{
                                    display: 'inline-block',
                                    minWidth: '280px'
                                }}>
                                   checkbox : {testimonial?.checkbox}
                                </span>
                                <button style={{ color: 'blue', minWidth: '50px' }} onClick={() => handleEdit(testimonialIndex)} >Edit</button>
                                <button style={{ color: 'red' }} onClick={() => handleDelete(testimonialIndex)} >Delete</button>
                            </div>
                        )
                    })
                    :
                    'No Data found'
            }
        </>
    )
}

export default HomeTestimonial
