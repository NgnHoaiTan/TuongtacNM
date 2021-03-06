import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import Home from '../component/Home/Home'
import SideBar from '../component/SideBar/SideBar'
import NavBar from '../component/NavBar/NavBar'
import { getresult } from '../features/Auth/authSlice';
import { fetchAsyncAdminByAccount, fetchAsyncUsers, getAdmin, getListUsers } from '../features/Slice/UserSlice';
import { fetchAsyncPosts } from '../features/Slice/PostSlice';
import { fetchAsyncVideos } from '../features/Slice/VideoSlice';
import { fetchAsyncAdminAccounts, getAdminAccounts } from '../features/Slice/AccountSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const { accountId } = useSelector(getresult);
  const admin = useSelector(getAdmin);
  const adminAccounts = useSelector(getAdminAccounts)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const calldispatch = async () => {
      setLoading(true)
      dispatch(fetchAsyncUsers())
      dispatch(fetchAsyncPosts());
      dispatch(fetchAsyncVideos());
      dispatch(fetchAsyncAdminByAccount(accountId));
      dispatch(fetchAsyncAdminAccounts());
      setLoading(false)
    }
    calldispatch()
  }, [dispatch, accountId])
  console.log(admin)
  console.log(loading)
  return (
    <>
      {
        !loading ?
          <>
            <Grid container spacing={0}>
              <Grid item xs={2} style={{ backgroundColor: '#10182B' }}>
                <SideBar admin={admin} />
              </Grid>
              <Grid item xs={10}>
                <NavBar admin={admin} />
                <Home adminAccounts={adminAccounts} />
              </Grid>
            </Grid>
          </> :
          <>
          Loading
          </>
      }

    </>

  )
}

export default HomePage