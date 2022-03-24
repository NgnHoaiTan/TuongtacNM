import React from 'react'
import { Card, CardContent, Typography, IconButton } from '@mui/material'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const VideoUser = ({ video }) => {
    return (
        <Card style={{ backgroundColor: '#5E2C1C', borderRadius: '10px' }}>
            <div>
                <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/jR_ZjvlZsqE"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                >
                </iframe>
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
