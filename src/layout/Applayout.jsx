import { Routes, Route } from 'react-router-dom';
import React from 'react'

import HomePage from '../pages/HomePage';
import LevelManagePage from '../pages/LevelManagePage';
import UserManagePage from '../pages/UserManagePage';

const Applayout = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/LevelManage" element={<LevelManagePage />} />
            <Route path='/UserManage' element={<UserManagePage />} />
        </Routes>
    )
}

export default Applayout