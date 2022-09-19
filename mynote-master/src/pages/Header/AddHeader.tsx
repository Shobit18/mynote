// import { Button, input, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"



function AddHeader() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [routes, setRoutes] = useState('');
    const [checked, setChecked] = useState(false);


    const handleTitleChange = (e:any) => {
        setTitle(e.target.value)
    }
    const handleRoutesChange = (e:any) => {
        setRoutes(e.target.value)
    }
    const handleCheckedChange = (e:any) => {
        setChecked(true)
    }
   
    const handleSubmit = () => {
        console.log({ title, routes, checked })

        const _header = localStorage.getItem('header') && (localStorage.getItem('header') || "[]").length > 0 ? JSON.parse(localStorage.getItem('header') || "[]") : []

        localStorage.setItem('header', JSON.stringify([..._header, { title, routes, checked }]))

        navigate('/')
    }

    return (
        <>
            <h1> Adds header </h1>
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => handleTitleChange(e)} /> <br />
            <label>routes</label>
            <input type="text" value={routes} onChange={(e) => handleRoutesChange(e)}  />   <br />
            <input type="checkbox"  onChange={(e) => handleCheckedChange(e)}  />   <br />
            
            <button onClick={handleSubmit}  > ADD Page</button>
        </>
    )
}

export default AddHeader