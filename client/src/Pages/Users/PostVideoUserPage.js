import React from 'react'
import { Grid } from '@mui/material'

import CoverImageUser from '../../Components/CoverImageUser/CoverImageUser'
import SidebarUser from '../../Components/SidebarUser/SidebarUser'
import PostVideoUser from '../../Components/PostVideoUser/PostVideoUser'

const PostVideoUserPage = () => {
  return (
    <>
      <CoverImageUser />
      <div>
        <Grid container spacing={0}>
          <Grid item xs={3} style={{ backgroundColor: '#8850FF' }}>
            <SidebarUser />
          </Grid>
          <Grid item xs={9}>
            <PostVideoUser />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default PostVideoUserPage