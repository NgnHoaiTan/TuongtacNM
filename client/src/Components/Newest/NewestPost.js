import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import PostCard from '../Card/PostCard';
import { makeStyles } from '@mui/styles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsyncPosts, getListPosts } from '../../features/Slice/PostSlice';
import { Link } from 'react-router-dom';
const useStyle = makeStyles((theme) => ({
}))

const NewestPost = () => {
    const classes = useStyle()
    const posts = useSelector(getListPosts);

    return (

        <Grid container className={classes.gridcontainer} spacing={3}>
            {posts && posts.length > 0 && <>

                <Grid item md={3}>
                    <Link to={`/post/${posts[0]._id}`}>
                        <PostCard post={posts[0]} />
                    </Link>
                </Grid>
                <Grid item md={3}>
                    <Link to={`/post/${posts[1]._id}`}>
                        <PostCard post={posts[1]} />
                    </Link>
                </Grid>
                <Grid item md={3}>
                    <Link to={`/post/${posts[2]._id}`}>
                        <PostCard post={posts[2]} />
                    </Link>
                </Grid>
                <Grid item md={3}>
                    <Link to={`/post/${posts[3]._id}`}>
                        <PostCard post={posts[3]} />
                    </Link>
                </Grid>

            </>}

        </Grid>
    );
};

export default NewestPost;