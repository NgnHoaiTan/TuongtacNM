import { Typography, Button, Box, Avatar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PublicIcon from '@mui/icons-material/Public';
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { logout } from '../../features/Auth/authSlice';
import { useDispatch } from 'react-redux';

import useStyles from './styles'

const SideBar = ({admin}) => {
  const dispatch = useDispatch();
  const location = useLocation()
  const classes = useStyles()
  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <Box style={{ minHeight: '710px', paddingTop: '25px' }}>
      <Box>
        <Avatar src={admin.image} sx={{width:100,height:100,margin:'0 auto'}}/>
      </Box>

      <Box style={{ marginTop: '10px' }}>
        <Typography align='center' variant='h6' style={{ color: '#fff' }}>{admin.name}</Typography>
        <Typography align='center' variant='body2' style={{ color: '#fff' }}>Administrator</Typography>
      </Box>

      <Box>
        <Box style={{ borderBottom: '1px solid #fff', margin: '15px 30px 30px 30px' }}></Box>
        <ul>
          <Typography variant='body1' sx={{ color: '#314BD4', marginLeft: '10px' }}>Tác vụ quản lý</Typography>
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
          <Typography variant='body1' sx={{ color: '#314BD4', marginLeft: '10px' }}>Điều hướng</Typography>
          {/* <Link to='/user' style={{ textDecoration: 'none' }}>
            <li className={clsx(classes.sidebarItem, '/user' === location.pathname ? classes.activeItem : '')}>
              <PublicIcon />
              <Typography variant='body1' style={{ marginLeft: '14px' }}>Website người dùng</Typography>
            </li>
          </Link> */}
          <li onClick={handleLogout} className={clsx(classes.sidebarItem)}>
            <ExitToAppIcon />
            <Typography variant='body1' style={{ marginLeft: '14px' }}>Đăng xuất</Typography>
          </li>
        </ul>
      </Box>

    </Box>
  )
}

export default SideBar