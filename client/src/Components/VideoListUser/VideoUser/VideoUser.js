import React from 'react'
import { Card, CardContent, Typography, IconButton } from '@mui/material'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';



const VideoUser = ({ video }) => {
    return (
        <Card style={{ backgroundColor: '#5E2C1C', borderRadius: '10px' }}>
            <div>
                <video
                    style={{
                        height: '200px',
                        width: '100%',
                        objectFit: 'unset'
                    }}
                    type="video/mp4"
                    src={video.video}
                    controls
                />
                
            </div>
            <CardContent>
                <div>
                    <Typography
                        style={{
                            color: '#fff',
                            height: '1.6',
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: '1',
                        }}
                        variant='h6'
                        component='span'
                        gutterBottom
                    >
                        {video.title}
                    </Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton>
                        <FavoriteRoundedIcon sx={{ color: '#FF0000' }} />
                    </IconButton>
                    <Typography variant='h6' component='span' sx={{ color: '#fff' }}>
                        {video.like}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}

export default VideoUser
