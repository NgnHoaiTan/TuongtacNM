import React from 'react'
import { Grid } from '@mui/material'

import SideBar from '../component/SideBar/SideBar'
import NavBar from '../component/NavBar/NavBar'
import UserManage from '../component/UserManage/UserManage'

const HomePage = () => {
  return (
    <Grid container spacing={0}>
        <Grid item xs={2} style={{  backgroundColor: '#10182B' }}>
            <SideBar />
        </Grid>
        <Grid item xs={10}>
            <UserManage />
        </Grid>
    </Grid>
  )
}

export default HomePage