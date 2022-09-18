import Sidebar from "../../components/sidebar/sidebar";
import Navbar from "../../components/navbar/Navbar";
import AddBanner from "../banner/AddBanner";
import AddTestimonial from "../testimonials/AddTestimonial";
// import "./home.scss";
// import Footer from "../footer/footer";
// import Header from "../Header/Header";
// import HomePage from "./HomePage";

const HeaderHome = () => {
//   const getData = JSON.parse(localStorage.getItem("allData") || "[]")
  // console.log(getData)
  return (

        <>
        <div>

        <h1>Add Home banner</h1>

        <AddBanner />
        </div>

        <div>
            <h1>Add Testimonials</h1>
            <AddTestimonial />
        </div>
        </>
  );
};

export default HeaderHome;
