import React from 'react'
import { Grid } from '@mui/material'

import CoverImageUser from '../../Components/CoverImageUser/CoverImageUser'
import SidebarUser from '../../Components/SidebarUser/SidebarUser'
import UploadVideoUser from '../../Components/UploadVideoUser/UploadVideoUser'

const UploadVideoUserPage = () => {
  return (
    <>
      <CoverImageUser />
      <div>
        <Grid container spacing={0}>
          <Grid item xs={3} style={{ backgroundColor: '#8850FF' }}>
            <SidebarUser />
          </Grid>
          <Grid item xs={9}>
            <UploadVideoUser />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default UploadVideoUserPage