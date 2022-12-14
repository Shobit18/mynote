import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function HomeFooter() {
    const navigate = useNavigate()
    const [footer, setFooter] = useState([]);


    useEffect(() => {
        const footer = localStorage.getItem('header') || "";
        setFooter(JSON.parse(footer || "[]"));
    }, [footer])

    const handleEdit = (footerIndex: any) => {
        localStorage.setItem('editIndex', footerIndex)
        navigate('/admin/EditHeader')
    }
    
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

                    <div className=" border-2 ">
                        <div className="w-screen border-2 grid grid-cols-3 ">
                            {
                                footer && footer.length > 0 ?
                                    footer.map((header: any, headerIndex: any) => {
                                        return (
                                            <div className="w-1/2  m-2 ">
                                                <h1 className="font-bold"> {header.title} </h1>
                                                
                                                <div className=" m-2 border-2 ">
                                                    {

                                                       header.subData.map((value: any, footerIndex: any) => {
                                                            return (
                                                                <div className="m-2 p-2 ">
                                                                    <div className="m-2 p-2 ">
                                                                        LinkTitle: {value.linkTitle}</div>
                                                                    <div className="m-2 p-2   w-1/2">
                                                                        Url: {value.url}
                                                                    </div>

                                                                    <div className="m-2 p-2 ">
                                                                        checkbox: {(value.ischecked) ? "checked" : "unchecked"}
                                                                    </div>

                                                                    <button className="bg-blue-200 p-2" onClick={() => handleEdit(headerIndex)} >Edit</button>
                                                                    {/* <button className="bg-red-200 p-2" onClick={() => handleDelete(footerIndex)} >Delete</button> */}

                                                                </div>
                                                            )
                                                        })
                                                    }

                                                </div>

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
        </div>

    )
}

export default HomeFooter
