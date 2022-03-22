import { Grid } from '@mui/material';
import React from 'react';
import VideoCard from '../Card/VideoCard';
import { makeStyles } from '@mui/styles';
const useStyle = makeStyles((theme) => ({
   
 

}))

const NewestPost = () => {
    const classes = useStyle()
    return (
        <Grid container className={classes.gridcontainer} spacing={4}>
            <Grid item md={3}>
                <VideoCard />
            </Grid>
            <Grid item md={3}>
                <VideoCard />
            </Grid>
            <Grid item md={3}>
                <VideoCard />
            </Grid>
            <Grid item md={3}>
                <VideoCard />
            </Grid>
        </Grid>
    );
};

export default NewestPost;