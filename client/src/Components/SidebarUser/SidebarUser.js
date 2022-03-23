import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import { Typography, IconButton } from '@mui/material'
import clsx from 'clsx'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PostAddIcon from '@mui/icons-material/PostAdd';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';

const useStyles = makeStyles(() => ({
    sidebarItem: {
        margin: '5px 0',
        borderRadius: '40px',
        '&:hover': {
            backgroundColor: '#515151'
        }
    },
    active: {
        backgroundColor: '#515151'
    }
}))

const sidebarUserData = [
    {
        path: '/user',
        icon: <HomeIcon fontSize='20px'/>,
        title: 'Trang chủ'
    },
    {
        path: '/user/post-video',
        icon: <VideoCallIcon fontSize='20px'/>,
        title: 'Đăng video'
    },
    {
        path: '/user',
        icon: <PostAddIcon fontSize='20px'/>,
        title: 'Tạo bài viết'
    },
    {
        path: '/user',
        icon: <InfoIcon fontSize='20px'/>,
        title: 'Thông tin cá nhân'
    }
]

const SidebarUser = () => {
    const classes = useStyles()
    const [active, setactive] = useState()
    return (
        <div style={{ minHeight: '520px' }}>
            <div style={{
                backgroundImage: 'url(https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/270058684_2847398758814170_5004830795248101596_n.jpg?stp=dst-jpg_s851x315&_nc_cat=110&ccb=1-5&_nc_sid=da31f3&_nc_ohc=bYajZpaTSgUAX-tGBwh&_nc_ht=scontent.fvca1-3.fna&oh=00_AT8u-ATIH9hJ-qeT6rnixz5hU-BJqHokj0Xa2ybexOs6DQ&oe=623FCC69)',
                height: '130px',
                width: '130px',
                margin: 'auto',
                borderRadius: '50%',
                border: '2px solid blue',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                transform: 'translateY(-50%)',
            }}
            >
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                transform: 'translateY(-150%)',
            }}
            >
                <Typography variant='h5' sx={{ color: '#fff' }} component='span'>Nguyễn Hoài Tân</Typography>
            </div>
            <div style={{ borderTop: '1px solid #fff', margin: '0 25px', position: 'relative', top: '-15px' }} />
            <div style={{ padding: '0 0 30px 0' }}>
                <ul style={{ listStyle: 'none', margin: '0 30px', padding: '0' }}>
                    {sidebarUserData.map((sidebarItem, index) => (
                        <Link to={sidebarItem.path} style={{ textDecoration: 'none' }} key={index}>
                            <li 
                                className={clsx(classes.sidebarItem, active === index ? classes.active : '')}
                                onClick={(e) => setactive(index)}
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
                </ul>
            </div>
        </div>
    )
}

export default SidebarUser