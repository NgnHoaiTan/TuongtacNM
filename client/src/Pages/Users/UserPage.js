import React, { useEffect } from 'react'
import { Grid } from '@mui/material'

import CoverImageUser from '../../Components/CoverImageUser/CoverImageUser'
import SidebarUser from '../../Components/SidebarUser/SidebarUser'
import HomeUser from '../../Components/HomeUser/HomeUser'
import { useParams } from 'react-router'
import { fetchAsyncUserById, getUser } from '../../features/Slice/UserSlice'
import { useDispatch, useSelector } from 'react-redux'

const Userpage = () => {
  const {userId} = useParams();
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncUserById(userId))
  },[userId])
  const user = useSelector(getUser);
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
                <HomeUser user={user}/>
              </Grid>
            </Grid>
          </div>
        </> : <div>Loading</div>
      }
    </>
  )
}

export default Userpage