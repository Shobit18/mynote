// import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"



function HomeFooter() {
    const navigate = useNavigate()
    const [footer, setFooter] = useState([]);
    // const [image, setImage] = useState('');
    // const [description, setDescription] = useState('');

    useEffect(() => {
        const footer = localStorage.getItem('header') || "";
        setFooter(JSON.parse(footer || "[]"));
    }, [footer])

    const handleDelete = (footerOutIndex: any) => {
        const _header = footer.filter((footer: any, footerInIndex: any) => {
            if (footerInIndex !== footerOutIndex) {
                return footer
            }
        })
        console.log(_header)
        setFooter(_header)
        localStorage.setItem('_header', JSON.stringify(_header))
    }

    const handleEdit = (footerIndex: any) => {
        localStorage.setItem('editIndex', footerIndex)
        navigate('/admin/EditHeader')
    }
    // const handleImageChange =(e:any) => {
    //     setImage(e.target.value)
    // }
    // const headers = JSON.parse(localStorage.getItem("header") || "[]");
    // let getIndex: any = localStorage.getItem('header');
    // getIndex = JSON.parse(getIndex);
    // const editIndex: any = localStorage.getItem('editIndex');
    // console.log(getIndex[editIndex].title)


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

                    <div className=" border-2 ">
                        <div className="w-screen border-2 flex ">

                            <h1>Column</h1>

                            {
                                footer && footer.length > 0 ?
                                    footer.map((header: any, headerIndex: any) => {
                                        return (
                                            <div className="w-1/2  m-2 ">
                                               <h1 className="font-bold"> {header.title} </h1>
                                                {/* Value: {header.values.url} */}
                                                <div className=" m-2 border-2 ">
                                                    {
                                                        // footer.map((footer: any, footerIndex: any) => {
                                                        //     return (

                                                        //         <div className="m-2 p-2 ">
                                                        //             {/* <div className="m-2 p-2 ">
                                                        //                 Title: {header.subData.link}</div>
                                                        //             <div className="m-2 p-2   w-1/2">
                                                        //                 routes: {header.subData.link}
                                                        //             </div> */}
                                                                   
                                                        //             <div className="m-2 p-2 ">
                                                        //                 checkbox: {(header.ischecked) ? "checked" : "unchecked"}
                                                        //             </div>

                                                        //             <button className="bg-blue-200 p-2" onClick={() => handleEdit(headerIndex)} >Edit</button>
                                                        //             <button className="bg-red-200 p-2" onClick={() => handleDelete(headerIndex)} >Delete</button>

                                                        //         </div>
                                                        // //     )
                                                        // // })



                                                        header.subData.map((value: any, footerIndex: any) => {
                                                            return (
                                                                <div className="m-2 p-2 ">
                                                                     <div className="m-2 p-2 ">
                                                                Link: {value.link}</div>
                                                                     <div className="m-2 p-2   w-1/2">
                                                                         Url: {value.url}
                                                                     </div> 
                                                                           
                                                                     <div className="m-2 p-2 ">
                                                                         checkbox: {(value.ischecked) ? "checked" : "unchecked"}
                                                                     </div>
        
                                                                     <button className="bg-blue-200 p-2" onClick={() => handleEdit(headerIndex)} >Edit</button>
                                                                     <button className="bg-red-200 p-2" onClick={() => handleDelete(footerIndex)} >Delete</button>
        
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
                    {/* <h1></h1>
                    <div className=" border-2  w-screen">
                        <h1>Column</h1>
                        {
                            footer && footer.length > 0 ?
                                footer.map((footer: any, footerIndex: any) => {
                                    return (
                                        <div className="w-1/2">



                                            <div className="m-2 p-2 border-2">
                                                <div className="m-2 p-2 border-2 uppercase w-48 font-bold">
                                                    Title: {footer.title}</div>
                                                <div className="m-2 p-2  border-2  w-1/2">
                                                    routes: {footer.routes}
                                                </div>
                                                <div className="m-2 p-2  border-2  w-1/2">
                                                    url: {footer.url}
                                                </div>
                                                <div className="m-2 p-2 ">
                                                    checkbox: {(footer.checked) ? "checked" : "unchecked"}
                                                </div>

                                                <button className="bg-blue-200 p-2" onClick={() => handleEdit(footerIndex)} >Edit</button>
                                                <button className="bg-red-200 p-2" onClick={() => handleDelete(footerIndex)} >Delete</button>

                                            </div>

                                        </div>

                                    )
                                })
                                :
                                'No Data found'
                        }
                    </div> */}
                </div>
                {/* <div className="grid grid-cols-3 gap-4">

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
                </div> */}
            </div>
        </div>

    )
}

export default HomeFooter
