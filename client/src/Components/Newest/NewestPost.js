import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import PostCard from '../Card/PostCard';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncPosts, getListPosts } from '../../features/Slice/PostSlice';
import { Link } from 'react-router-dom';
const useStyle = makeStyles((theme) => ({
    btnseemore: {
        display: 'flex',
        justifyContent: 'flex-end'
    }
}))

const NewestPost = () => {
    const classes = useStyle()
    const posts = useSelector(getListPosts);
    const newposts = posts.slice(0, posts.length > 4 ? 4 : posts.length);
    const dispatch = useDispatch()
    
    return (
        <>
            <Grid container className={classes.gridcontainer} spacing={3}>
                {newposts && newposts.length > 0 && <>
                    {newposts.map(post => {
                        return (
                            <Grid item md={3} key={post._id}>
                                <Link to={`/post/${post._id}`}>
                                    <PostCard post={post} />
                                </Link>
                            </Grid>
                        )
                    })}

                </>}

            </Grid>
            <div className={classes.btnseemore}>
                <Link to='/post'>
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