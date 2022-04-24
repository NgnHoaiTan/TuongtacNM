import React, { useEffect } from 'react'
import { Grid } from '@mui/material'

import CoverImageUser from '../../Components/CoverImageUser/CoverImageUser'
import SidebarUser from '../../Components/SidebarUser/SidebarUser'
import UploadVideoUser from '../../Components/UploadVideoUser/UploadVideoUser'
import {fetchAsyncAuthUserById, getAuthUser, getUser } from '../../features/Slice/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
const UploadVideoUserPage = () => {
  const {userId} = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncAuthUserById(userId))
  },[dispatch,userId])
  const user = useSelector(getUser);
  const authUser = useSelector(getAuthUser);
  return (
    <>
      {user && Object.keys(user).length > 0 ?
        <>
          <CoverImageUser />
          <div>
            <Grid container spacing={0}>
              <Grid item xs={3} style={{ backgroundColor: '#8850FF' }}>
                <SidebarUser user={user} authUser={authUser}/>
              </Grid>
              <Grid item xs={9}>
                <UploadVideoUser user={user} authUser={authUser}/>
              </Grid>
            </Grid>
          </div>
        </> :
        <div>Loading...</div>
      }
    </>
  )
}

export default UploadVideoUserPage