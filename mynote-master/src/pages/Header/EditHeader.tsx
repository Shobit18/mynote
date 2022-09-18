// import { Button, input, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function EditHeader() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [routes, setRoutes] = useState('');
    


    const handleTitleChange = (e:any) => {
        setTitle(e.target.value)
    }
    const handleRoutesChange = (e:any) => {
        setRoutes(e.target.value)
    }


    const handleEdit = () => {
        console.log({ title, routes,  index: localStorage.getItem('editIndex') })
        let header = localStorage.getItem('header') && (localStorage.getItem('header')||"[]").length > 0 ? JSON.parse(localStorage.getItem('header') || "[]") : []

        const _header = header.map((header:any, headerInIndex:any) => {
            if (headerInIndex == localStorage.getItem('editIndex')) {
                return { title, routes }
            } else {
                return header
            }
        })
        console.log(_header)
        localStorage.setItem('header', JSON.stringify(_header))
        navigate('/HomeHeader')
    }

    return (
        <>
            <h1> Edit header </h1>
            <input value={title} placeholder="title" onChange={(e) => handleTitleChange(e)}  /> <br />
            <input value={routes} placeholder="routes" onChange={(e) => handleRoutesChange(e)}  /><br />

            <button onClick={handleEdit} > Edit </button>

        </>
    )
}

export default EditHeader