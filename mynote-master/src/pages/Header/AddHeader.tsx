import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Sidebar from "../../components/sidebar/sidebar";
import HomeFooter from "../footer/HomeFooter";
import Header from "./Header";

interface subMenu {
    url: string;
    link: string;
    isChecked: boolean
  }
  
  
function AddHeader() {
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [routes, setRoutes] = useState('');
    const [checked, setChecked] = useState(false);
    const [link, setLink] = useState('');
    const [url, setUrl] = useState('');
    const [isChecked, setisChecked] = useState(false);

    const [submenu, setSubmenu] = useState([{link: '', url: ''}]);
    // const [submenu, setSubmenu] = useState<subMenu | any>(null);
    // const [notes, setNotes] = useState([] as any);
    // const [submenu, setSubmenu] = useState([]);
    // const [notes, setNotes] = useState([] as any);
    // setSubmenu({link: setLink(''), url: setUrl(''), isChecked: setisChecked(false)})
    


    // const [url, setUrl] = useState('');

    // const _header: any = localStorage.getItem('header') && (localStorage.getItem('header') || "[]")

const handleSubmenu = (e:any) => {
    // setSubmenu({...submenu, [e.target.name]: e.target.name })
    // setSubmenu([{
    //     setLink(e.target.value)
    // }])
    setLink(e.target.value)
    setUrl(e.target.value)
}

    const handleTitleChange = (e:any) => {
        setTitle(e.target.value)
    }
    const handleRoutesChange = (e:any) => {
        setRoutes(e.target.value)
    }
    const handleCheckedChange = (e:any) => {
        setChecked(!checked)
    }


    // submenu.push('')
    // const data: any = {
    //     url : setUrl,
    //     link: setLink
    // }

    // submenu.push(data)
    // setSubmenu(submenu)

    
    // const handleSubmenu = (e:any) => {
    //     url: url
    // }
    //  submenu:any = [];

    // const handleUrl = (e: any) => {
    //     // setSubmenu(e.target.value)
    //     // setLink(e.target.value)
    //     setUrl(e.target.value)
    //     // setisChecked(true)

    //     // setUrl(e.target.value)
    // //     let subMenu: any = {
    // //         url,
    // //         link,
    // //         isChecked
    // // }
    // //     setSubmenu([submenu, subMenu]);
    // //     setLink(e.target.value)
    // //     setUrl(e.target.value)
    // //     setisChecked(true)
    // // }
    // }

    // const handleLink = (e:any) => {
    //     setLink(e.target.value);
    // }

    // const handleisChecked = (e:any) => {
    //     setisChecked(true);
    // }

    //     const handleSubmenu = (e:any) => {
    //     // setisChecked(true);
    //     // let newNote = {
    //     //     url: e.target.url.value,
    //     //     link: e.target.link.value
    //     // };
    //     // setSubmenu([...submenu, newNote])
    // }
    // const addNote = (e:any) => {
    //     e.preventDefault();
    //     const newNote = {
    //       url: e.target.url.value,
    //       link: e.target.link.value,
    //     };
    //     setNotes([...notes, newNote]);
    //     e.target.url.value = "";
    //     e.target.link.value = "";
    //   };



    // setSubmenu([setLink, setUrl, setisChecked])

    const handleSubmit = (e: any) => {
        // let newNote = {
        //     url: e.target.url,
        //     link: e.target.link
        // };
        // setSubmenu([...submenu, newNote])

        // const addNote = (e:any) => {
        //     e.preventDefault();
        //     const newNote = {
        //     //   id: Math.random().toString(36).substr(2, 9),
        //       url,
        //       link
        //     };
        //     setNotes([...notes, newNote]);
        //     // e.target.url.value = "";
        //     // e.target.link.value = "";
        //     setUrl('')
        //     setLink('');
        // const newNote = {
        //     url: e.target.url,
        //     link: e.target.link,
        //   };
        //   setNotes([...notes, newNote]);
        //   e.target.url = "";
        //   e.target.link = "";
    
          
          
        console.log({ title, routes, checked })

        const _header = localStorage.getItem('header') && (localStorage.getItem('header') || "[]").length > 0 ? JSON.parse(localStorage.getItem('header') || "[]") : []

        localStorage.setItem('header', JSON.stringify([..._header, { id: _header.length, title,  routes, submenu, checked }]))
        // console.log(localStorage.getItem())
        navigate('/admin/HomeHeader')
    }

    return (
        <>
        <div className="flex">
            <div>
                <Sidebar />
            </div>
            <div>

            <h1> Adds header </h1>
            
            <label>Title</label>
            <input type="text" value={title} onChange={(e) => handleTitleChange(e)}  className="p-2 m-2 border-2"/> <br />
            <label>routes</label>
            <input type="text" value={routes} onChange={(e) => handleRoutesChange(e)}  className="p-2 m-2 border-2" />   <br />
            {/* <input type="text"  onChange={(e) => handleSubmenu(e)}  className="p-2 m-2 border-2" />   <br /> */}
            <input type="text" name="url" value={url} onChange={handleSubmenu}  className="p-2 m-2 border-2" />   <br />
            <input type="text" name="link" value={link} onChange={ handleSubmenu}  className="p-2 m-2 border-2" />   <br />
            <input type="checkbox" onChange={(e) => setisChecked(true)}  className="p-2 m-2 border-2" />   <br />
            {/* <input type="text" value={url} onChange={(e) => addNote(e)}  className="p-2 m-2 border-2" />   <br /> */}
            {/* <input type="text" value={link} onChange={(e) => handleLink(e)}  className="p-2 m-2 border-2" />   <br /> */}
            {/* <input type="checkbox" onChange={(e) => handleisChecked(e)}  className="p-2 m-2 border-2" />   <br /> */}
            <input type="checkbox"  onChange={(e) => handleCheckedChange(e)} className="p-2 m-2"  />   <br />
            {/* <input type="text"  onChange={(e) => handleSubmenu(e)} className="p-2 m-2"  />   <br /> */}
            
            <button onClick={handleSubmit}  className="bg-blue-200 p-2 m-2"> ADD Page</button>

            </div>
        </div>   
        <hr className="w-screen" />
        <HomeFooter />
        </>
    )
}

export default AddHeader