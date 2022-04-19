import React from 'react'
import { Routes, Route, Redirect } from 'react-router-dom'
import Homepage from '../Pages/Homepage/Homepage';
import Userpage from '../Pages/Users/UserPage';
import UploadVideoUserPage from '../Pages/Users/UploadVideoUserPage';
import UploadArticleUserPage from '../Pages/Users/UploadArticleUserPage';
import InforPersonalUserPage from '../Pages/Users/InforPersonalUserPage';
import Posts from '../Pages/Article/Posts';
import Videos from '../Pages/Article/Videos'
import Layout from './Layout';
import LandingPage from '../Pages/LandingPage/LandingPage';
import PostDetail from '../Pages/DetailArticle/PostDetail';
import VideoDetail from '../Pages/DetailArticle/VideoDetail';
import { useSelector } from 'react-redux';
const Applayout = () => {
  const { currentUser } = useSelector(state => state.auth.login)
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout page={Homepage} />} />
        <Route path="/welcome" element={<LandingPage />} />
        <Route path='/post'>
          <Route path="" element={<Layout page={Posts} />} />
          <Route path=":id" element={<Layout page={PostDetail} />} />
        </Route>
        <Route path='/video'>
          <Route path="" element={<Layout page={Videos} />} />
          <Route path=":id" element={<Layout page={VideoDetail} />} />
        </Route>
        <Route path="/user">
          <Route path=":id" element={<Layout page={Userpage} />} />
          <Route path="upload-video" element={<Layout page={UploadVideoUserPage} />} />
          <Route path="upload-article" element={<Layout page={UploadArticleUserPage} />} />
          <Route path="information" element={<Layout page={InforPersonalUserPage} />} />
        </Route>
      </Routes>
    </>
  )
}

export default Applayout