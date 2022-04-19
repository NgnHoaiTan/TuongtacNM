import React from 'react'
<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
=======
import { Routes, Route, Redirect } from 'react-router-dom'
>>>>>>> 09ece6a4667e0b16d142d145834b8292721cc9dd
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
<<<<<<< HEAD
import Login from '../Components/Login/Login';
import { getresult } from '../features/Auth/authSlice';
import { useSelector } from 'react-redux';
const Applayout = () => {
  const loggedin = useSelector(getresult);
  console.log(Object.keys(loggedin).length === 0)
=======
import { useSelector } from 'react-redux';
const Applayout = () => {
  const { currentUser } = useSelector(state => state.auth.login)
>>>>>>> 09ece6a4667e0b16d142d145834b8292721cc9dd
  return (
    <>
      <Routes>
        {Object.keys(loggedin).length === 0 &&
          <Route path="/welcome" element={<LandingPage />} />
        }
        {
          Object.keys(loggedin).length !== 0 &&
          <>
            <Route path="/" element={<Layout page={Homepage} />} />
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

          </>
        }
        <Route path='*' element={<Navigate to={Object.keys(loggedin).length === 0 ? "/welcome" : "/"} /> }/>

      </Routes>
    </>
  )
}

export default Applayout