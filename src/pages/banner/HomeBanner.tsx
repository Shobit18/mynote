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
        navigate('/EditBanner')
    }



    return (
        <>
            <br />
            <button
                onClick={() => {
                    navigate('/AddBanner')
                }}

                 > ADD Banner Content </button>
            <br />

            {
                banner && banner.length > 0 ?
                    banner.map((banner:any, bannerIndex:any) => {
                        return (
                            <div style={{ borderBottom: "1px solid #eee", margin: '10px 0px' }}>
                                <span style={{
                                    display: 'inline-block',
                                    minWidth: '200px'
                                }}>
                                   Title: {banner?.title }</span>
                                <span style={{
                                    display: 'inline-block',
                                    minWidth: '280px'
                                }}>
                                    Description: {banner?.description}
                                </span>
                                <span style={{
                                    display: 'inline-block',
                                    minWidth: '200px'
                                }}>
                                   image: {banner?.image }</span>
                                <span style={{
                                    display: 'inline-block',
                                    minWidth: '280px'
                                }}>
                                    buton: {banner?.buton}
                                </span>
                                <button style={{ color: 'blue', minWidth: '50px' }} onClick={() => handleEdit(bannerIndex)} >Edit</button>
                                <button style={{ color: 'red' }} onClick={() => handleDelete(bannerIndex)} >Delete</button>
                            </div>
                        )
                    })
                    :
                    'No Data found'
            }
        </>
    )
}

export default HomeBanner
