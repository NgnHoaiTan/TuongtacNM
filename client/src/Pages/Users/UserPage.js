import React from 'react'
import { Grid } from '@mui/material'

import CoverImageUser from '../../Components/CoverImageUser/CoverImageUser'
import SidebarUser from '../../Components/SidebarUser/SidebarUser'
import HomeUser from '../../Components/HomeUser/HomeUser'

const Userpage = () => {
  return (
    <>
      <CoverImageUser />
      <div>
        <Grid container spacing={0}>
          <Grid item xs={3} style={{ backgroundColor: '#8850FF' }}>
            <SidebarUser />
          </Grid>
          <Grid item xs={9}>
            <HomeUser />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Userpage