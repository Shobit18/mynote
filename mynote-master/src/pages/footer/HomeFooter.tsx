// import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../../components/sidebar/sidebar"


function HomeFooter() {
    const navigate = useNavigate()
    const [footer, setFooter] = useState([]);
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const footer = localStorage.getItem('footer') || "";
        setFooter(JSON.parse(footer || "[]"));
    }, [footer])

    const handleDelete = (footerOutIndex: any) => {
        const _footer = footer.filter((footer: any, footerInIndex: any) => {
            if (footerInIndex !== footerOutIndex) {
                return footer
            }
        })
        console.log(_footer)
        setFooter(_footer)
        localStorage.setItem('footer', JSON.stringify(_footer))
    }

    const handleEdit = (footerIndex: any) => {
        localStorage.setItem('editIndex', footerIndex)
        navigate('/admin/EditFooter')
    }
    // const handleImageChange =(e:any) => {
    //     setImage(e.target.value)
    // }

    return (
       <div>
        <div >
            <form className="m-2 p-2">
            <img src="https://picsum.photos/200/300" alt="gooterimage" className="m-2 rounded-full h-16 w-16"></img>
            <textarea className="h-32 m-2 w-full" placeholder="description"></textarea>
            </form> 
        </div>
        <div className="flex">
            <div>
                {/* <Sidebar /> */}
            </div>
            <div>

                <br />
                <button
                    onClick={() => {
                        navigate('/admin/AddFooter')
                    }}
                    className="rounded-md bg-blue-200 p-2"
                > ADD footer Content </button>
                <br />
                <h1 className="font-bold m-2">Menu</h1>
                
                <div className="grid grid-cols-3 gap-4">

                    {
                        footer && footer.length > 0 ?
                            footer.map((footer: any, footerIndex: any) => {
                                return (
                                    <div className="m-2  border-2 w-96">
                                        <div className="m-2 p-2 uppercase font-bold">
                                            Title: {footer.title}</div>
                                        <div className="m-2 p-2 ">
                                            routes: {footer.routes}
                                        </div>
                                        <div className="m-2 p-2 ">
                                            checkbox: {(footer.checked) ? "checked" : "unchecked"}
                                        </div>

                                        <button className="bg-blue-200 p-2" onClick={() => handleEdit(footerIndex)} >Edit</button>
                                        <button className="bg-red-200 p-2" onClick={() => handleDelete(footerIndex)} >Delete</button>
                                    </div>
                                )
                            })
                            :
                            'No Data found'
                    }
                </div>
            </div>
        </div>
        </div>     
    )
}

export default HomeFooter
