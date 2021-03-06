import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import { Typography, IconButton, Avatar, Box, Button } from '@mui/material'
import clsx from 'clsx'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PostAddIcon from '@mui/icons-material/PostAdd';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../../features/Auth/authSlice';
import HomeIcon from '@mui/icons-material/Home';
import { resetUser } from '../../features/Slice/UserSlice';
import { useDispatch, useSelector } from 'react-redux'
import { getFollows, fetchAsyncFollowsOfUser } from '../../features/Slice/FollowSlice'

const useStyles = makeStyles(() => ({
    sidebarItem: {
        margin: '5px 0',
        borderRadius: '40px',
        '&:hover': {
            backgroundColor: '#515151',
        }
    },
    active: {
        backgroundColor: '#515151'
    }
}))



const SidebarUser = ({ user, authUser }) => {
    const follows = useSelector(getFollows)
    const classes = useStyles()
    const location = useLocation()
    const dispatch = useDispatch();
    const handleLogout = () => {
        console.log('logout')
        dispatch(resetUser())
        dispatch(logout())
        
        
    }
    const sidebarUserData = (user._id === authUser._id ? ([
        {
            path: '/user/',
            icon: <HomeIcon className={classes.iconmenu} fontSize='20px' />,
            title: 'Tổng quan'
        },
        {
            path: '/user/upload-video/',
            icon: <VideoCallIcon className={classes.iconmenu} fontSize='20px' />,
            title: 'Đăng video'
        },
        {
            path: '/user/upload-article/',
            icon: <PostAddIcon className={classes.iconmenu} fontSize='20px' />,
            title: 'Tạo bài viết'
        },
        {
            path: '/user/information/',
            icon: <InfoIcon className={classes.iconmenu} fontSize='20px' />,
            title: 'Thông tin cá nhân'
        }
    ]) : (
        [
            {
                path: '/user/',
                icon: <HomeIcon fontSize='20px' />,
                title: 'Tổng quan'
            },
        ]
    ))
    useEffect(() => {
        dispatch(fetchAsyncFollowsOfUser(authUser._id))
    }, [dispatch, authUser._id])
    return (
        <>
            {user && Object.keys(user).length > 0 ?
                <div style={{ minHeight: '600px' }}>
                    <Box sx={{ alignItems: 'center' }}>
                        <div style={{ position: 'relative', height: '80px' }}>
                            <Avatar
                                src={authUser.image}
                                sx={{
                                    position: 'relative',
                                    width: '150px',
                                    height: '150px',
                                    top: '-75px',
                                    margin: '0 auto',
                                    align: 'center'
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex' }}>
                            <Typography variant='h5' sx={{ color: '#fff', position: 'relative', margin: '0 auto' }} component='span'>{authUser.name}</Typography>
                        </div>
                        <div style={{ display: 'flex',justifyContent:'center' }}>
                            {follows ?
                                <Typography sx={{fontWeight:500,color:'white',fontSize:'14px'}}>
                                    {follows.length} Người theo dõi
                                </Typography>
                                :
                                <Typography sx={{fontWeight:500,color:'white',fontSize:'14px'}}>
                                    0 Người theo dõi
                                </Typography>
                            }
                        </div>
                    </Box>

                    <div style={{ borderTop: '1px solid #fff', margin: '10px 25px' }} />
                    <div style={{ padding: '0 0 30px 0' }}>
                        <ul style={{ listStyle: 'none', margin: '0 30px', padding: '0' }}>
                            {sidebarUserData.map((sidebarItem, index) => (
                                <Link to={`${sidebarItem.path}${authUser._id}`} style={{ textDecoration: 'none' }} key={index}>
                                    <li
                                        className={clsx(classes.sidebarItem, `${sidebarItem.path}${authUser._id}` === location.pathname ? classes.active : '')}
                                    >
                                        <div style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                                            <IconButton sx={{ color: '#000', backgroundColor: '#fff', padding: '5px' }} size='large'>
                                                {sidebarItem.icon}
                                            </IconButton>
                                            <Typography sx={{ color: '#fff' }} variant='h6' component='span' marginLeft='30px'>
                                                {sidebarItem.title}
                                            </Typography>
                                        </div>
                                    </li>
                                </Link>
                            ))}
                            <li
                                className={classes.sidebarItem}
                                sx={{ cursor: 'pointer' }}
                                onClick={handleLogout}
                            >
                                {user._id === authUser._id ?
                                    <>
                                        <div style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
                                            <IconButton sx={{ color: '#000', backgroundColor: '#fff', padding: '5px' }} size='large'>
                                                <LogoutIcon fontSize='20px' />
                                            </IconButton>

                                            <Typography sx={{ color: '#fff' }} variant='h6' component='span' marginLeft='30px'>
                                                Đăng xuất
                                            </Typography>
                                        </div>
                                    </>
                                    :
                                    ''
                                }

                            </li>

                        </ul>

                    </div>

                </div>
                : <div>
                    Loading
                </div>

            }
        </>

    )
}

export default SidebarUser