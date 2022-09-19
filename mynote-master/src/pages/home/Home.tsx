import AddBanner from "../banner/AddBanner";
import AddTestimonial from "../testimonials/AddTestimonial";

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
