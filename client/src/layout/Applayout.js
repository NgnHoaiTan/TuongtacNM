import React from 'react'
import { Routes, Route } from 'react-router-dom'


import Header from '../Components/Header/Header';
import Homepage from '../pages/Homepage/Homepage';
import Userpage from '../pages/Users/UserPage';
import PostVideoUserPage from '../pages/Users/PostVideoUserPage';
import Footer from '../Components/Footer/Footer';

const Applayout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/user" element={<Userpage />} />
        <Route path="/user/post-video" element={<PostVideoUserPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Applayout