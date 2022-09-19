import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "./Header";


function EditHeader() {
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


    const handleEdit = () => {
        console.log({ title, routes, checked,  index: localStorage.getItem('editIndex') })
        let header = localStorage.getItem('header') && (localStorage.getItem('header')||"[]").length > 0 ? JSON.parse(localStorage.getItem('header') || "[]") : []

        const _header = header.map((header:any, headerInIndex:any) => {
            if (headerInIndex == localStorage.getItem('editIndex')) {
                return { title, routes, checked }
            } else {
                return header
            }
        })
        console.log(_header)
        localStorage.setItem('header', JSON.stringify(_header))
        navigate('/admin/HomeHeader')
    }

    return (
        <>
            <h1> Edit header </h1>
           <form className="m-2 p-2 bg-blue-200">

            <input type="text" value={title} placeholder="title" onChange={(e) => handleTitleChange(e)}  className="m-2 p-2" /> <br />
            <input type="text" value={routes} placeholder="routes" onChange={(e) => handleRoutesChange(e)} className="m-2 p-2" /><br />
            <input type="checkbox" onChange={(e) => handleCheckedChange(e)}  /><br />

            <button onClick={handleEdit} className="m-2 p-2 bg-green-200" > Edit Header </button>
            </form> 
        </>
    )
}

export default EditHeader