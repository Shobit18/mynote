import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Footer from './components/Footer';
import Header from './components/Header';
// import logo from './logo.svg';
// import './App.css';
import Home from "./components/Home"
// import Contact from "./components/Contact"
// import About from "./components/About"
import constant from './contant';
import Navbar from './components/navbar/Navbar';
// import Home from "./pages/home/Home";
import Signup from "./pages/signup/Signup";
import HeaderHome from "./pages/home/HeaderHome";
// import Home from './pages/home/Home';
import HomePage from './pages/home/HomePage';
import Login from './pages/login/Login';
import HomeTestimonial from './pages/testimonials/HomeTestimonial';
import EditTestimonial from './pages/testimonials/EditTestimonial';
import AddTestimonial from './pages/testimonials/AddTestimonial';

import AddBanner from './pages/banner/AddBanner';
import EditBanner from './pages/banner/EditBanner';
import HomeBanner from './pages/banner/HomeBanner';
// import Header from './pages/Header/Header';

import AddHeader from './pages/Header/AddHeader';
import EditHeader from './pages/Header/EditHeader';
import HomeHeader from './pages/Header/HomeHeader';

function App() {
  const addDataToLocal = localStorage.setItem('constant', JSON.stringify(constant))
  // const getNavData = JSON.parse(localStorage.getItem("navData")|| "[]")
  return (
    <div className="App">

      <Header />

      {/* <Route path="/" element={<Home />}>Home</Route>
        <Route path="/About" element={<About />}>About</Route>
        <Route path="/Contact" element={<Contact />}>Contact</Route>
        <Route path="/components/navbar/Navbar" element={<Navbar />}>Navbar</Route> */}
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {/* <Route index element={<HeaderHome />} /> */}
            {/* <Route index element={<HomePage />} /> */}
            {/* <Route index element={<HomeHeader />} /> */}
            <Route path="/AddHeader" element={<AddHeader />} />
          <Route path="/EditHeader" element={<EditHeader />} />

            <Route path="/HomeTestimonial" element={<HomeTestimonial />} />
            <Route path="/AddTestimonial" element={<AddTestimonial />} />
          <Route path="/EditTestimonial" element={<EditTestimonial />} />

            {/* <Route index element={<HomeBanner />} /> */}
            <Route path="/HomeBanner" element={<HomeBanner />} />
            <Route path="/AddBanner" element={<AddBanner />} />
          <Route path="/EditBanner" element={<EditBanner />} />
            {/* {
              getNavData.map((navData: any) => {
                <Route path="/{navData.routes}">
                  <Route index element={<navData.title />} />
                </Route>  
              })
            } */}
            {/* <Route path="/admin" element={<Signup />} />
            <Route path="/admin/homePage" element={<HomePage />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/headerHome" element={<HeaderHome />} /> */}

          </Route>
        </Routes>
      {/* </BrowserRouter> */}
      {/* <Home /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
