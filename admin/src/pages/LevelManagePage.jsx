import React from 'react'
import { Grid } from '@mui/material'

import LevelManage from '../component/LevelManage/LevelManage'
import SideBar from '../component/SideBar/SideBar'
import NavBar from '../component/NavBar/NavBar'

const HomePage = () => {
  return (
    <Grid container spacing={0}>
        <Grid item xs={2} style={{  backgroundColor: '#10182B' }}>
            <SideBar />
        </Grid>
        <Grid item xs={10}>
            <NavBar />
            <LevelManage />
        </Grid>
    </Grid>
  )
}

export default HomePage