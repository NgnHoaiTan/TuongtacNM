import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react'

import HomePage from '../pages/HomePage';
import LevelManagePage from '../pages/LevelManagePage';
import UserManagePage from '../pages/UserManagePage';
import Layout from './layout';
import LandingPage from '../pages/LandingPage';
import { useSelector } from 'react-redux';
import { getresult } from '../features/Auth/authSlice';

const Applayout = () => {
    const loggedin = useSelector(getresult);
    console.log(loggedin);
    return (
        <Routes>

            {Object.keys(loggedin).length === 0 &&
                <Route path="/login" element={<Layout page={LandingPage} />} />
            }
            {
                Object.keys(loggedin).length !== 0 &&
                <>
                    <Route path="/" element={<Layout page={HomePage} />} />
                    <Route path="/LevelManage" element={<Layout page={LevelManagePage} />} />
                    <Route path='/UserManage' element={<Layout page={UserManagePage} />} />
                </>
            }
            <Route path='*' element={<Navigate to={Object.keys(loggedin).length === 0 ? "/login" : "/"} />} />



        </Routes>
    )
}

export default Applayout