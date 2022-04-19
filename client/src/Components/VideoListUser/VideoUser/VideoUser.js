import React from 'react'
import { Card, CardContent, CardActions, Typography, Button, IconButton } from '@mui/material'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { Link } from 'react-router-dom';


const VideoUser = ({ video }) => {
    return (
        <Card style={{ backgroundColor: '#191919', borderRadius: '10px' }}>
            <div>
                <video
                    style={{
                        height: '200px',
                        width: '100%',
                        objectFit: 'unset'
                    }}
                    type="video/mp4"
                    src={video.videourl}
                    controls
                />

            </div>
            <Link to={`video/${video._id}`}>

                <CardContent>
                    <div>
                        <Typography
                            style={{
                                color: '#fff',
                                height: '20px',
                                overflow: 'hidden',
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: '2',
                                fontSize: '17px',
                                fontWeight: 500
                            }}

                            component='span'
                            gutterBottom
                        >
                            {video.title}
                        </Typography>
                    </div>

                </CardContent>

            </Link>

        </Card>
    )
}

export default VideoUser
