import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Footer from './components/Footer';
import Header from './components/Header';
import Home from "./components/Home"
// import Contact from "./components/Contact"
// import About from "./components/About"
import constant from './contant';

import HomePage from './pages/home/HomePage';
import Login from './pages/login/Login';
import HomeTestimonial from './pages/testimonials/HomeTestimonial';
import EditTestimonial from './pages/testimonials/EditTestimonial';
import AddTestimonial from './pages/testimonials/AddTestimonial';

import AddBanner from './pages/banner/AddBanner';
import EditBanner from './pages/banner/EditBanner';
import HomeBanner from './pages/banner/HomeBanner';

import AddHeader from './pages/Header/AddHeader';
import EditHeader from './pages/Header/EditHeader';
import HomeHeader from './pages/Header/HomeHeader';
import Footer from './pages/footer/footer';

function App() {

  const loginData = {
      username: "shobit",
      password: 123
  }

  localStorage.setItem("loginData", JSON.stringify(loginData))
  const addDataToLocal = localStorage.setItem('constant', JSON.stringify(constant))

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  // const getNavData = JSON.parse(localStorage.getItem("navData")|| "[]")
  return (
    <div className="App">

      <Header />
    <div className='flex'>
      <div>
          {/* <Sidebar /> */}
      </div>
    <div>

    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/admin/HomePage" element={<HomePage />} />
        <Route path="/admin/HomeHeader" element={<HomeHeader />} />
        <Route path="/admin/AddHeader" element={<AddHeader />} />
      <Route path="/admin/EditHeader" element={<EditHeader />} />

        <Route path="/admin/HomeTestimonial" element={<HomeTestimonial />} />
        <Route path="/admin/AddTestimonial" element={<AddTestimonial />} />
      <Route path="/admin/EditTestimonial" element={<EditTestimonial />} />

        
        <Route path="/admin/HomeBanner" element={<HomeBanner />} />
        <Route path="/admin/AddBanner" element={<AddBanner />} />
      <Route path="/admin/EditBanner" element={<EditBanner />} />       
        <Route path="/admin" element={<Login />} />
    </Route>
    </Routes>
    </div>
      </div>  
     <Footer /> 
      {/* <Route path="/" element={<Home />}>Home</Route>
        <Route path="/About" element={<About />}>About</Route>
        <Route path="/Contact" element={<Contact />}>Contact</Route>
        <Route path="/components/navbar/Navbar" element={<Navbar />}>Navbar</Route> */}
      {/* <BrowserRouter> */}
      {/* </BrowserRouter> */}
      {/* <Home /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
