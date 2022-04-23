import React, { useEffect } from 'react'
import { Grid } from '@mui/material'

import CoverImageUser from '../../Components/CoverImageUser/CoverImageUser'
import SidebarUser from '../../Components/SidebarUser/SidebarUser'
import InforPersonalUser from '../../Components/InforPersonalUser/InforPersonalUser'
import { useParams } from 'react-router'
import {fetchAsyncUserById, getUser } from '../../features/Slice/UserSlice'
import { useDispatch, useSelector } from 'react-redux'
const InforPersonalUserPage = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  useEffect(()=>{
    dispatch(fetchAsyncUserById(userId))
  },[dispatch,userId])
  return (
    <>
      {user && Object.keys(user).length > 0 ?
        <>
          <CoverImageUser />
          <div>
            <Grid container spacing={0}>
              <Grid item xs={3} style={{ backgroundColor: '#8850FF' }}>
                <SidebarUser user={user}/>
              </Grid>
              <Grid item xs={9}>
                <InforPersonalUser user={user}/>
              </Grid>
            </Grid>
          </div>
        </> :
        <div>
          Loading..
        </div>

      }

    </>
  )
}

export default InforPersonalUserPage