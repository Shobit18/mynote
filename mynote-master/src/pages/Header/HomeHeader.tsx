import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header"
import Sidebar from "../../components/sidebar/sidebar"
import Footer from "../footer/footer"
function HomeHeader() {
    const navigate = useNavigate()
    const [header, setHeader] = useState([])

    const UP = -1
    const DOWN = 1

    useEffect(() => {
        const header = localStorage.getItem('header') || "";
        setHeader(JSON.parse(header || "[]"));
    }, [header])

    const handleDelete = (headerOutIndex: any) => {
        const _header = header.filter((header: any, headerInIndex: any) => {
            if (headerInIndex !== headerOutIndex) {
                return header
            }
        })
        // console.log(_header)
        setHeader(_header)
        localStorage.setItem('header', JSON.stringify(_header))
    }

    const handleEdit = (headerIndex: any) => {
        localStorage.setItem('editIndex', headerIndex)
        navigate('/admin/EditHeader')
    }

    // handle ups and down move 
    const handleMove = (id:any, direction: any) => {
        console.log("cliked")
        const position = header.findIndex((i: any) => i.id === id)
        if(position<0) {
            console.log("items not found")
        } else if(direction === UP && position === 0 || direction === DOWN && position === header.length - 1) {
            return
        }
        const item = header[position]
        const newItems = header.filter((i:any) => i.id !== id)
        newItems.splice(position + direction, 0, item)
        localStorage.setItem('header', JSON.stringify(newItems))
    }

    return (
        <div>
            <Header />
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
                                            Title: {header.title}</div>

                                        <div className="m-2 p-2 ">
                                            routes: {header.routes}
                                        </div>
                                        <div className="m-2 p-2 ">
                                            checkbox: {(header.checked) ? "checked" : "unchecked"}
                                        </div>

                                        <button className="bg-blue-200 p-2" onClick={() => handleEdit(headerIndex)} >Edit</button>
                                        <button className="bg-red-200 p-2" onClick={() => handleDelete(headerIndex)} >Delete</button>
                                        <button className="p-1 m-2  text-2xl rounded-md bg-green-200" onClick={() => handleMove(header.id, UP)}>&#8593;</button>
                                        <button className="p-1 m-2  text-2xl rounded-md bg-green-200" onClick={() => handleMove(header.id, DOWN)}>&#8595;</button>
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
        </div>
    )
}

export default HomeHeader
