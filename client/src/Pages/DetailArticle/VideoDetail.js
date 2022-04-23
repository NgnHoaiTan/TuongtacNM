import React, { useEffect } from 'react';

import { makeStyles } from '@mui/styles';
import userdemo from '../../Images/user5.jpg';
import videoDemo from '../../assets/video/videodemo.mp4'
import { createTheme } from '@mui/material/styles';
import { Avatar, Box, Container, Typography } from '@mui/material';
import InteractionVideo from '../../Components/Interaction/InteractionVideo';
import { useParams } from 'react-router';
import { fetchAsyncVideoById, getVideo } from '../../features/Slice/VideoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncUserById, getUser } from '../../features/Slice/UserSlice';

const theme = createTheme();

const useStyle = makeStyles({
    root: {
        backgroundColor: '#EEEEEE',
        minHeight: '100vh',

    },
    userinfo: {
        display: 'flex',
    },
    horizon: {
        width: '100%',
        borderTop: '3px solid #c8c8c8',
        margin: '10px 0 10px'
    },
})

const VideoDetail = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const { id } = useParams();
    const video = useSelector(getVideo);
    const user = useSelector(getUser);
    useEffect(() => {
        const dispatchCall = async () => {
            await dispatch(fetchAsyncVideoById(id))
            await dispatch(fetchAsyncUserById(video.user))
        }
        dispatchCall();
    }, [dispatch, id])
    return (
        <>
            {video !== {} &&
                <div className={classes.root}>
                    <Container maxWidth='md' sx={{
                        bgcolor: 'white',
                        py: 2,


                    }}>
                        <Box component='div' className={classes.userinfo}>
                            <Avatar alt='user image' src={user.image ? user.image : userdemo} sx={{ mr: 1 }} />
                            <div className={classes.username}>
                                <Typography sx={{
                                    fontWeight: 500
                                }}>
                                    {user.name}
                                </Typography>
                                <Typography variant="body2" sx={{
                                    fontWeight: 300,

                                }}>
                                    {video.date_upload}
                                </Typography>
                            </div>
                        </Box>
                        <Box component='div' className={classes.videoinfo}>
                            <Typography className='title_of_post' sx={{ fontWeight: 500, fontSize: '18px', my: 1 }}>
                                {video.title}
                            </Typography>
                            <Box className={classes.mui_player}>
                                <video
                                    src={video.videourl}
                                    controls
                                    style={{
                                        width: '100%',
                                        objectFit: 'unset'
                                    }}
                                    autoPlay
                                    type="video/mp4"
                                />
                            </Box>
                        </Box>
                        <div className={classes.horizon}>

                        </div>
                        <Box component='div' className={classes.interaction}>
                            <InteractionVideo />
                        </Box>
                    </Container>
                </div>
            }
        </>

    );
};

export default VideoDetail;