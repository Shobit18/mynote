// import { Button } from "@mui/material"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
// import DeleteIcon from '@mui/icons-material/Delete'
// import EditIcon from '@mui/icons-material/Edit';

function HomeBanner() {
    const navigate = useNavigate()
    const [banner, setBanner] = useState([])

    useEffect(() => {
        const banner  = localStorage.getItem('banner') ||"";
        setBanner(JSON.parse(banner || "[]")); 
    }, [banner])

    const handleDelete = (bannerOutIndex: any) => {
        const _banner = banner.filter((banner:any, bannerInIndex:any) => {
            if (bannerInIndex !== bannerOutIndex) {
                return banner
            }
        })
        console.log(_banner)
        setBanner(_banner)
        localStorage.setItem('banner', JSON.stringify(_banner))
    }

    const handleEdit = (bannerIndex:any) => {
        localStorage.setItem('editIndex', bannerIndex)
        navigate('/admin/EditBanner')
    }



    return (
        <div>
            <br />
            <button
                onClick={() => {
                    navigate('/admin/AddBanner')
                }}
                className="bg-blue-200 p-2 m-2"
                 > ADD Banner Content </button>
            <br />
                <div className="border-2" >

               
            {
                banner && banner.length > 0 ?
                    banner.map((banner:any, bannerIndex:any) => {
                        return (
                            <div className=" m-2 p-2 boder-2  shadow-md">
                                <div className="m-2 p-2 border-2 w-scroll h-scroll">
                                   image: {banner.image }</div>
                                <div className="m-2 p-2  border-2 w-96">
                                   Title: {banner.title }</div>
                                <div className="m-2 p-2 border-2 w-96 h-scroll">
                                    Description: {banner.description}
                                </div>
                                <div className="m-2 p-2 border-2 rounded-md w-32">
                                    buton: {banner.button}
                                </div>
                                <button className="bg-blue-200 p-2" onClick={() => handleEdit(bannerIndex)} >Edit</button>
                                <button className="bg-blue-200 p-2" onClick={() => handleDelete(bannerIndex)} >Delete</button>
                            </div>
                        )
                    })
                    :
                    'No Data found'
            }
             </div>
        </div>
    )
}

export default HomeBanner
