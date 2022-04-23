import React from 'react'
import { Card, CardContent, CardActions, Typography, Button, IconButton } from '@mui/material'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
const useStyle = makeStyles({

    nameofarticle: {
        display: 'box',
        lineClamp: 2,
        boxOrient: 'vertical',
        overflow: 'hidden',
    }
})
const VideoUser = ({ video }) => {
    const classes = useStyle();
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
            <Link to={`/video/${video._id}`}>

                <CardContent>
                    <div>
                        <Typography
                            style={{
                                color: '#fff',
                                fontSize: '17px',
                                fontWeight: 500,
                                height:'50px'
                            }}
                            
                            component='span'
                            gutterBottom
                            className={classes.nameofarticle}
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
