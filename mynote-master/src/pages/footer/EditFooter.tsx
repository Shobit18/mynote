import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../../components/sidebar/sidebar";
import HomeFooter from "./HomeFooter";

function EditFooter() {
    const navigate = useNavigate()

    let getIndex: any = localStorage.getItem('header');
    getIndex = JSON.parse(getIndex);
    const editIndex: any = localStorage.getItem('editIndex');

    const [title, setTitle] = useState(getIndex[editIndex].title);
    const [routes, setRoutes] = useState(getIndex[editIndex].routes);
    const [url, setUrl] = useState(getIndex[editIndex].url);
    const [checked, setChecked] = useState(getIndex[editIndex].checked);



let getFooter: any = localStorage.getItem('header');

// getFooter.map((footer: any) => {
    
// })
    const handleTitleChange = (e: any) => {
        setTitle(e.target.value)
    }
    const handleRoutesChange = (e: any) => {
        setRoutes(e.target.value)
    }
    const handleUrlChange = (e: any) => {
        setUrl(e.target.value)
    }
    const handleCheckedChange = (e: any) => {
        setChecked(!checked)
    }


    const handleEdit = () => {
        console.log({ title, routes, url, checked, index: localStorage.getItem('editIndex') })
        let footer = localStorage.getItem('footer') && (localStorage.getItem('footer') || "[]").length > 0 ? JSON.parse(localStorage.getItem('footer') || "[]") : []

        const _footer = footer.map((footer: any, footerInIndex: any) => {
            if (footerInIndex == localStorage.getItem('editIndex')) {
                return { title, routes, url, checked }
            } else {
                return footer
            }
        })
        console.log(_footer)
        localStorage.setItem('footer', JSON.stringify(_footer))
        navigate('/admin/HomePage')
    }

    return (
        <>
            <div className="flex">
                <div>
                    <Sidebar />
                </div>
                
                <div>
                    <h1> Edit footer </h1>
                    <form className="m-2 p-2 bg-blue-200">

                        <input type="text" value={title} placeholder="title" onChange={(e) => handleTitleChange(e)} className="m-2 p-2" /> <br />
                        <input type="text" value={routes} placeholder="routes" onChange={(e) => handleRoutesChange(e)} className="m-2 p-2" /><br />
                        <input type="text" value={url} placeholder="url" onChange={(e) => handleUrlChange(e)} className="m-2 p-2" /><br />
                        <input type="checkbox" onChange={(e) => handleCheckedChange(e)} /><br />

                        <button onClick={handleEdit} className="m-2 p-2 bg-green-200" > Edit footer </button>
                    </form>
                    
                </div>
            </div>
            <hr className="w-screen" />
            <HomeFooter />
        </>
    )
}

export default EditFooter