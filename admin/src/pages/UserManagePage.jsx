import React, { useEffect } from 'react'
import { Grid } from '@mui/material'

import SideBar from '../component/SideBar/SideBar'
import NavBar from '../component/NavBar/NavBar'
import UserManage from '../component/UserManage/UserManage'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncPosts } from '../features/Slice/PostSlice'
import { fetchAsyncVideos } from '../features/Slice/VideoSlice'
import { fetchAsyncAdminByAccount, fetchAsyncUsers, getAdmin, getListUsers } from '../features/Slice/UserSlice'
import { fetchAsyncAdminAccounts, getAdminAccounts } from '../features/Slice/AccountSlice'
import { getresult } from '../features/Auth/authSlice'

const HomePage = () => {
  const dispatch = useDispatch();
  const {accountId} = useSelector(getresult);
  const admin = useSelector(getAdmin);
  const adminAccounts = useSelector(getAdminAccounts)
  const users = useSelector(getListUsers);
  useEffect(() => {
    const calldispatch = async()=>{
        await dispatch(fetchAsyncPosts());
        await dispatch(fetchAsyncVideos());
        await dispatch(fetchAsyncAdminByAccount(accountId));
        await dispatch(fetchAsyncAdminAccounts());
        await dispatch(fetchAsyncUsers())
    }
    calldispatch()
}, [dispatch,accountId])
  return (
    <Grid container spacing={0}>
        <Grid item xs={2} style={{  backgroundColor: '#10182B' }}>
            <SideBar admin={admin}/>
        </Grid>
        <Grid item xs={10}>
            <UserManage adminAccounts={adminAccounts}/>
        </Grid>
    </Grid>
  )
}

export default HomePage