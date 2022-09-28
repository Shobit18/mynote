import AddBanner from "../banner/AddBanner";
import AddTestimonial from "../testimonials/AddTestimonial";

const HeaderHome = () => {
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
