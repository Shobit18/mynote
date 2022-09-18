import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Footer from "../footer/footer";
import Header from "../Header/Header";
import HomePage from "./HomePage";

const HeaderHome = () => {
  // const getData = JSON.parse(localStorage.getItem("allData") || "[]")
  // console.log(getData)
  return (
    <div className="flex  h-sceen w-screen">
     <div className="w-auto">
      <Sidebar />
      </div> 
      <div className="homeContainer  w-screen h-screen h-96 ">
        {/* <Navbar /> */}
      {/* <div className="bannerImage h-screen">
      <div className="h-max p-4 rounded overflow-hidden shadow-lg ml-32 ">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-orange-400 w-screen text-3xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa tenetur excepturi voluptates inventore praesentium assumenda?</div>
              <p className="text-gray-700 text-base text-red-400 text-2xl">
                lorem
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="rounded-full m-3  p-4 items-center bg-orange-400">button</button>
            </div>
          </div>
          

        </div> */}
        {/* <Testimonial /> */}
        <Header />
          {/* <HomePage /> */}
        <div className=" mt-72 bottom-0">
          
        <Footer />
          </div>  
        {/* </div> */}
      </div>
    </div>
  );
};

export default HeaderHome;
