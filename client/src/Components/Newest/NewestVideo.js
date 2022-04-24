import { Grid, Button, Typography } from '@mui/material';
import React from 'react';
import VideoCard from '../Card/VideoCard';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
import { getListVideos } from '../../features/Slice/VideoSlice';
import { Link } from 'react-router-dom';
const useStyle = makeStyles((theme) => ({
    btnseemore: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}))

const NewestPost = () => {
    const classes = useStyle();
    const videos = useSelector(getListVideos);
    const newvideos = videos.slice(0, videos.length > 4 ? 4 : videos.length);
    return (
        <>
            <Grid container className={classes.gridcontainer} spacing={3}>
                {videos && videos.length > 0 &&
                    <>
                        {newvideos.map(video => {
                            return (
                                <Grid item md={3} key={video._id}>
                                    <Link to={`/video/${video._id}`}>
                                        <VideoCard video={video} />
                                    </Link>
                                </Grid>
                            )
                        })}

                    </>}

            </Grid>
            <div className={classes.btnseemore}>
                <Link to='/video'>
                    <Button variant="contained" className={classes.buttonview} size="small"

                        sx={{
                            mt: 3,

                        }}
                    >
                        <Typography variant="p" className={classes.textinbtn}>
                            Xem thêm
                        </Typography>
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default NewestPost;