// import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../../components/sidebar/sidebar"
import Footer from "../footer/footer"


function HomeHeader() {
    const navigate = useNavigate()
    const [header, setheader] = useState([])

    useEffect(() => {
        const header = localStorage.getItem('header') || "";
        setheader(JSON.parse(header || "[]"));
    }, [header])

    const handleDelete = (headerOutIndex: any) => {
        const _header = header.filter((header: any, headerInIndex: any) => {
            if (headerInIndex !== headerOutIndex) {
                return header
            }
        })
        console.log(_header)
        setheader(_header)
        localStorage.setItem('header', JSON.stringify(_header))
    }

    const handleEdit = (headerIndex: any) => {
        localStorage.setItem('editIndex', headerIndex)
        navigate('/admin/EditHeader')
    }



    return (
        <>
            <div className="flex">
                <div>
                    <Sidebar />
                </div>
                <div>

                    <br />
                    <button
                        onClick={() => {
                            navigate('/admin/AddHeader')
                        }}
                        className="rounded-md bg-blue-200 p-2"
                    > ADD header Content </button>
                    <br />
                    <h1 className="font-bold m-2">Menu</h1>
                    {
                        header && header.length > 0 ?
                            header.map((header: any, headerIndex: any) => {
                                return (
                                    <div className="m-2  border-2 w-96">
                                        <div className="m-2 p-2 ">
                                            Title: {header?.title}</div>
                                        <div className="m-2 p-2 ">
                                            routes: {header.routes}
                                        </div>
                                        <div className="m-2 p-2 ">
                                            checkbox: {(header.checked) ? "checked" : "unchecked"}
                                        </div>

                                        <button className="bg-blue-200 p-2" onClick={() => handleEdit(headerIndex)} >Edit</button>
                                        <button className="bg-red-200 p-2" onClick={() => handleDelete(headerIndex)} >Delete</button>
                                    </div>
                                )
                            })
                            :
                            'No Data found'
                    }
                </div>
            </div>
            <hr className="w-full" />
            <Footer />
        </>
    )
}

export default HomeHeader
