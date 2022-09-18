// import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


function HomeHeader() {
    const navigate = useNavigate()
    const [header, setheader] = useState([])

    useEffect(() => {
        const header  = localStorage.getItem('header') ||"";
        setheader(JSON.parse(header || "[]")); 
    }, [header])

    const handleDelete = (headerOutIndex: any) => {
        const _header = header.filter((header:any, headerInIndex:any) => {
            if (headerInIndex !== headerOutIndex) {
                return header
            }
        })
        console.log(_header)
        setheader(_header)
        localStorage.setItem('header', JSON.stringify(_header))
    }

    const handleEdit = (headerIndex:any) => {
        localStorage.setItem('editIndex', headerIndex)
        navigate('/EditHeader')
    }



    return (
        <>
            <br />
            <button 
                onClick={() => {
                    navigate('/AddHeader')
                }}
                className ="rounded-md bg-blue-200 p-2"
                 > ADD header Content </button>
            <br />

            {
                header && header.length > 0 ?
                    header.map((header:any, headerIndex:any) => {
                        return (
                            <div className="m-2  border-2 w-96">
                                <div className="m-2 p-2 ">
                                   Title: {header?.title }</div>
                                <div className="m-2 p-2 ">
                                    routes: {header?.routes}
                                </div>
                                
                                <button className="bg-blue-200 p-2" onClick={() => handleEdit(headerIndex)} >Edit</button>
                                <button className="bg-red-200 p-2" onClick={() => handleDelete(headerIndex)} >Delete</button>
                            </div>
                        )
                    })
                    :
                    'No Data found'
            }
        </>
    )
}

export default HomeHeader
