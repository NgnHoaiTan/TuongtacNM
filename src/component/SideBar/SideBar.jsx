import { Typography, Button, Box } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'

import useStyles from './styles'

const SideBar = () => {

  const location = useLocation()
  const classes = useStyles()


  return (
    <Box style={{ minHeight: '720px', paddingTop: '25px' }}>
      <Box style={{
        backgroundImage: 'url(https://top10az.com/wp-content/uploads/2021/07/Uzumaki-Naruto-1024x1024.jpg)',
        height: '90px',
        width: '90px',
        margin: 'auto',
        borderRadius: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      >
      </Box>

      <Box style={{ marginTop: '10px' }}>
        <Typography align='center' variant='h6' style={{ color: '#fff' }}>Bùi Việt Anh</Typography>
        <Typography align='center' variant='body2' style={{ color: '#fff' }}>Administrato</Typography>
      </Box>

      <Box>
        <Box style={{ borderBottom: '1px solid #fff', margin: '15px 30px 30px 30px' }}></Box>
        <ul>
            <Typography variant='body1' sx={{color: '#314BD4'}}>Tác vụ quản lý</Typography>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <li className={clsx(classes.sidebarItem, '/' === location.pathname ? classes.activeItem : '')}>
                <MenuIcon />
                <Typography variant='body1' style={{ marginLeft: '14px' }}>Trang chủ</Typography>
              </li>
            </Link>
            <Link to='/UserManage' style={{ textDecoration: 'none' }}>
              <li className={clsx(classes.sidebarItem, '/UserManage' === location.pathname ? classes.activeItem : '')}>
                <AccountCircleIcon />
                <Typography variant='body1' style={{ marginLeft: '14px' }}>Quản lý người dùng</Typography>
              </li>
            </Link>
        </ul>
        <ul>
            <Typography variant='body1' sx={{color: '#314BD4'}}>Điều hướng</Typography>
            <Link to='/user' style={{ textDecoration: 'none' }}>
              <li className={clsx(classes.sidebarItem, '/user' === location.pathname ? classes.activeItem : '')}>
                <MenuIcon />
                <Typography variant='body1' style={{ marginLeft: '14px' }}>Website người dùng</Typography>
              </li>
            </Link>
            <Link to='/logout' style={{ textDecoration: 'none' }}>
              <li className={clsx(classes.sidebarItem, '/logout' === location.pathname ? classes.activeItem : '')}>
                <ExitToAppIcon />
                <Typography variant='body1' style={{ marginLeft: '14px' }}>Đăng xuất</Typography>
              </li>
            </Link>
        </ul>
      </Box>

    </Box>
  )
}

export default SideBar