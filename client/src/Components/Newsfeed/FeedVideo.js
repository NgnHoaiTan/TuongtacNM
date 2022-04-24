import { Box,Card, CardContent, Typography} from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
const useStyle = makeStyles({

    nameofarticle: {
        display: 'box',
        lineClamp: 3,
        boxOrient: 'vertical',
        overflow: 'hidden',
    }
})
const FeedVideo = ({ video}) => {
    const classes = useStyle();
    return (
        <Box className='feed' sx={{ p: 1 }}>
            <Link to={`/video/${video._id}`}>

                <Card style={{ backgroundColor: '#191919', borderRadius: '10px' }}>
                    <div>
                        <video
                            style={{
                                height:'180px',
                                width: '100%',
                                objectFit: 'cover',
                                
                            }}
                            type="video/mp4"
                            src={video.videourl}
                            controls
                        />

                    </div>
                    <Link to={`/video/${video._id}`}>

                        <CardContent style={{ padding: '10px', height: '85px' }}>
                            <div>
                                <Typography
                                    style={{
                                        color: '#fff',
                                        fontSize: '17px',
                                        fontWeight: 500,
                                        
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
            </Link>
        </Box>
    );
};

export default FeedVideo;