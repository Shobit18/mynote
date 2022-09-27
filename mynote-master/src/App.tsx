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

import AddFooter from './pages/footer/AddFooter';
import EditFooter from './pages/footer/EditFooter';
import HomeFooter from './pages/footer/HomeFooter';
import { AuthProvider } from './components/auth';
import { RequireAuth } from './components/RequireAuth';

function App() {

  const loginData = {
    username: "shobit",
    password: 123
  }

  localStorage.setItem("loginData", JSON.stringify(loginData))
  const addDataToLocal = localStorage.setItem('constant', JSON.stringify(constant))

  return (
    <div className="App">

      {/* <Header /> */}
      <div className='flex'>
        <div>
          {/* <Sidebar /> */}
        </div>
        <div>
          <AuthProvider>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="/admin" element={<Login />} />

                <Route path="/admin/HomePage" element={<RequireAuth><HomePage /></RequireAuth>} />
                <Route path="/admin/HomeHeader" element={<RequireAuth><HomeHeader /></RequireAuth>} />
                <Route path="/admin/AddHeader" element={<RequireAuth><AddHeader /></RequireAuth>} />
                <Route path="/admin/EditHeader" element={<EditHeader />} />

                <Route path="/admin/HomeTestimonial" element={<RequireAuth><HomeTestimonial /></RequireAuth>} />
                <Route path="/admin/AddTestimonial" element={<RequireAuth><AddTestimonial /></RequireAuth>} />
                <Route path="/admin/EditTestimonial" element={<RequireAuth><EditTestimonial /></RequireAuth>} />


                <Route path="/admin/HomeBanner" element={<RequireAuth><HomeBanner /></RequireAuth>} />
                <Route path="/admin/AddBanner" element={<RequireAuth><AddBanner /></RequireAuth>} />
                <Route path="/admin/EditBanner" element={<RequireAuth><EditBanner /></RequireAuth>} />


                <Route path="/admin/HomeFooter" element={<RequireAuth><HomeFooter /></RequireAuth>} />
                <Route path="/admin/AddFooter" element={<RequireAuth><AddFooter /></RequireAuth>} />
                <Route path="/admin/EditFooter" element={<RequireAuth><EditFooter /></RequireAuth>} />
              </Route>
            </Routes>
          </AuthProvider>
        </div>
      </div>
     
    </div>
  );
}

export default App;
