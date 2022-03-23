import React from 'react'
import { Routes, Route } from 'react-router-dom'


import Header from '../Components/Header/Header';
import Homepage from '../pages/Homepage/Homepage';
import Explore from '../Components/Explore/Explore';
import Userpage from '../pages/Users/Userpage';
import Footer from '../Components/Footer/Footer';

const Applayout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/user" element={<Userpage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Applayout