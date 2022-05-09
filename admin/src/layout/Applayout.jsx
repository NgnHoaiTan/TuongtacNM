import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect } from 'react'

import HomePage from '../pages/HomePage';
import LevelManagePage from '../pages/LevelManagePage';
import UserManagePage from '../pages/UserManagePage';
import Layout from './layout';
import LandingPage from '../pages/LandingPage';
import { useDispatch, useSelector } from 'react-redux';
import { getresult } from '../features/Auth/authSlice';
import { fetchAsyncAdminByAccount, getAdmin } from '../features/Slice/UserSlice';


const Applayout = () => {
    const loggedin = useSelector(getresult);
    const dispatch = useDispatch();
    const admin = useSelector(getAdmin)
    console.log(admin)
    console.log(loggedin);
    useEffect(()=>{
        if(Object.keys(loggedin).length !== 0){
            dispatch(fetchAsyncAdminByAccount(loggedin.accountId))
        }
    },[loggedin])

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