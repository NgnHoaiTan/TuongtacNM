import React from 'react'
import { Routes, Route } from 'react-router-dom'


import Header from '../Components/Header/Header';
import Homepage from '../Pages/Homepage/Homepage';
import Userpage from '../Pages/Users/UserPage';
import UploadVideoUserPage from '../Pages/Users/UploadVideoUserPage';
import UploadArticleUserPage from '../Pages/Users/UploadArticleUserPage';
import InforPersonalUserPage from '../Pages/Users/InforPersonalUserPage';
import Footer from '../Components/Footer/Footer';
import Layout from './Layout';

const Applayout = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout page={Homepage} />} />
        <Route path="/user">
          <Route path="" element={<Layout page={Userpage} />} />
          <Route path="upload-video" element={<Layout page={UploadVideoUserPage} />} />
          <Route path="upload-article" element={<Layout page={UploadArticleUserPage} />} />
          <Route path="information" element={<Layout page={InforPersonalUserPage} />} />
        </Route>
      </Routes>
    </>
  )
}

export default Applayout