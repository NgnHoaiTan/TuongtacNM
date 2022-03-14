import { AppBar, Button, Toolbar, Typography, IconButton, Badge, Box } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import React from 'react'

const NavBar = () => {
  return (
    <Box style={{ margin: '20px' }}>
      <AppBar
        position='relative'
        style={{
          backgroundColor: '#666',
          height: '90px',
          borderRadius: '10px',
          justifyContent: 'center'
        }}
      >
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Box>
            <Typography variant='h6'>Chào mừng quay trở lại, Việt Anh</Typography>
            <Typography variant='h6'>Chúc bạn có một ngày làm việc vui vẻ</Typography>
          </Box>
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <Box style={{ marginRight: '50px'}}>
              <IconButton color="primary" component="span">
                <Badge badgeContent={12} color='primary'>
                  <NotificationsNoneIcon sx={{ color: '#fff' }} />
                </Badge>
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar