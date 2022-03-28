import React from 'react'
import { Routes, Route } from 'react-router-dom'


import Header from '../Components/Header/Header';
import Homepage from '../pages/Homepage/Homepage';
import Userpage from '../pages/Users/UserPage';
import UploadVideoUserPage from '../pages/Users/UploadVideoUserPage';
import UploadArticleUserPage from '../pages/Users/UploadArticleUserPage';
import Footer from '../Components/Footer/Footer';

const Applayout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/user">
          <Route path="" element={<Userpage />} />
          <Route path="upload-video" element={<UploadVideoUserPage />} />
          <Route path="upload-article" element={<UploadArticleUserPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  )
}

export default Applayout