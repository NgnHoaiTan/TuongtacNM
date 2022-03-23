import { Grid } from '@mui/material';
import React from 'react';
import PostCard from '../Card/PostCard';
import { makeStyles } from '@mui/styles';
const useStyle = makeStyles((theme) => ({
   
 

}))

const NewestPost = () => {
    const classes = useStyle()
    return (
        <Grid container className={classes.gridcontainer} spacing={4}>
            <Grid item md={3}>
                <PostCard />
            </Grid>
            <Grid item md={3}>
                <PostCard />
            </Grid>
            <Grid item md={3}>
                <PostCard />
            </Grid>
            <Grid item md={3}>
                <PostCard />
            </Grid>
        </Grid>
    );
};

export default NewestPost;