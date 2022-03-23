import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, IconButton } from '@mui/material'
import VideoCallIcon from '@mui/icons-material/VideoCall';

const SidebarUser = () => {
    return (
        <div style={{ backgroundColor: '#8850FF', height: '300px', position: 'relative' }}>
            <div style={{
                backgroundImage: 'url(https://top10az.com/wp-content/uploads/2021/07/Uzumaki-Naruto-1024x1024.jpg)',
                height: '110px',
                width: '110px',
                margin: 'auto',
                borderRadius: '50%',
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
                transform: 'translateY(-120%)',
            }}
            >
                <Typography variant='h6' sx={{ color: '#fff' }} component='span'>Nguyễn Hoài Tân</Typography>
            </div>
            <div>
                <ul style={{ listStyle: 'none' }}>
                    <Link to='/user' style={{ textDecoration: 'none' }}>
                        <li>
                            <IconButton sx={{ color: '#000', backgroundColor: '#fff' }} component="span" size='large'>
                                <VideoCallIcon />
                            </IconButton>
                            <Typography variant='body1' component='span'>Đăng video</Typography>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default SidebarUser