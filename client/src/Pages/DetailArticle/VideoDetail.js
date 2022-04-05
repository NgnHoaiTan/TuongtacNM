import React from 'react';
import Interaction from '../../Components/Interaction/Interaction';
import { makeStyles } from '@mui/styles';
import userdemo from '../../Images/user5.jpg';
import videoDemo from '../../assets/video/videodemo.mp4'
import { createTheme } from '@mui/material/styles';
import { Avatar, Box, Container, Typography } from '@mui/material';


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
    
    return (
        <div className={classes.root}>
            <Container maxWidth='md' sx={{
                bgcolor: 'white',
                py: 2,
                

            }}>
                <Box component='div' className={classes.userinfo}>
                    <Avatar alt='user image' src={userdemo} sx={{ mr: 1 }} />
                    <div className={classes.username}>
                        <Typography sx={{
                            fontWeight: 500
                        }}>
                            Nguyễn Hoài Tân
                        </Typography>
                        <Typography variant="body2" sx={{
                            fontWeight: 300,

                        }}>
                            04/04/2022
                        </Typography>
                    </div>
                </Box>
                <Box component='div' className={classes.videoinfo}>
                    <Typography className='title_of_post' sx={{ fontWeight: 500, fontSize: '18px', my: 1 }}>
                        Khám phá thế giới động vật hoang dã
                    </Typography>
                    <Box className={classes.mui_player}>
                        <video 
                            src={videoDemo}
                            controls
                            style={{
                                width: '100%',
                                objectFit:'unset'
                            }}
                            
                            type="video/mp4"
                        />
                    </Box>
                </Box>
                <div className={classes.horizon}>

                </div>
                <Box component='div' className={classes.interaction}>
                    <Interaction />
                </Box>
            </Container>
        </div>
    );
};

export default VideoDetail;