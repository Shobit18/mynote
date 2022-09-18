import Reac, { useState } from "react";
import { ReactDOM } from "react";
import { Link } from 'react-router-dom';
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../footer/footer";
import Testimonial from "../testimonials/Testimonial";
import HeaderHome from "./HeaderHome";
// import Footer from "./Footer";
// import Testimonial from "./Testimonial";

function HomePage() {
  // const getDataFromLocal = JSON.parse(localStorage.getItem("constant") || "");
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [button, setButton] = useState('');
  // const backgroundImage = `url(${getDataFromLocal.banner.bannerImage})`

  function saveData(e: any) {
      e.preventDefault()
      let data = {
          title: title,
          description: description,
          image: image,
          button: button
          
      }
      // allData.push(data)
      localStorage.setItem('updateData', JSON.stringify(data))
      // console.log("Local Data: ", +JSON.parse(localStorage.getItem("constant") || "[]"))
      
    }
    // localStorage.removeItem("constant") 
    const getUpdateData = JSON.parse(localStorage.getItem("updateData") || "[]");
    console.log("update:" +getUpdateData)

  return (
   <div> 
    <div className=" flex w-max">
      <Sidebar />
      <div className="  m-4 h-max">
        {/* <div className="  bg-no-repeat h-96 ">
          <div className="w-max  rounded overflow-hidden shadow-lg">
            <div className=" ">
              <div className="font-bold text-xl  text-orange-400 text-3xl">{getUpdateData.title}</div>
              <p className="text-gray-700 text-base text-red-400 text-2xl">
                {getUpdateData.description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <Link className="rounded-full m-3  p-4 items-center bg-orange-400" to="/about">{getDataFromLocal.banner.button}</Link>
            </div>
          </div>
        </div> */}

        <div className="">
          <form className="">
          <div className="p-2 m-2">
              <label>Image</label><br />
              <input type="file"  name="image" value={image} onChange={(e) => { setImage(e.target.value) }} placeholder={getUpdateData.image} className="p-2 m-2 border-2 w-28 h-32" />
            </div>
            <div className="p-2 m-2">
              <label>Title</label><br />
              <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder={getUpdateData.title} className="p-2 m-2 border-2 w-96 h-11" />
            </div>
            <div className="p-2 m-2">
              <label>Description</label><br />
              <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} placeholder={getUpdateData.description} className="p-2 m-2 border-2 w-96 h-52" />
            </div>

            <div className="p-2 m-2">
              <label>Button</label><br />
              <input type="text" value={button} onChange={(e) => { setButton(e.target.value) }} placeholder={getUpdateData.button}  className="p-2 m-2 rounded-md bg-green-200" />
            </div>
            <button onClick={saveData} className="p-2 m-2 rounded-md bg-green-200">Submit</button>
          </form>
        </div>
        <h1>
          {/* {getDataFromLocal.banner.title} */}
        </h1>
        {/* </div> */}
        <Testimonial />
      </div>
    </div>  
      <Footer />
      {/* Footer */}
      {/* <Footer /> */}
    </div >

  );
}

export default HomePage;
