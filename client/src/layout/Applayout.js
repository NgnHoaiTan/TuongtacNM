import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from '../Components/Header/Header'
import UserPage from '../pages/Users/UserPage'
import Footer from '../Components/Footer/Footer'

const Applayout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/user" element={<UserPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Applayout