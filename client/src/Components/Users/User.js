import React from 'react'
import { Grid } from '@mui/material'

import SidebarUser from '../SidebarUser/SidebarUser'

const User = () => {
  return (
    <>
      <div style={{
        backgroundImage: 'url(https://thumbs.dreamstime.com/b/big-waterfall-forest-14638783.jpg)',
        height: '200px',
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      >
      </div>
      <div>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <SidebarUser />
          </Grid>
          <Grid item xs={9}>
            9
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default User