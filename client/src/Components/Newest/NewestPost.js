import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import PostCard from '../Card/PostCard';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
import { getListPosts } from '../../features/Slice/PostSlice';
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
    console.log(posts)
    return (
        <>
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
                        <Link to={`/post/${posts[2]._id}`}>
                            <PostCard post={posts[2]} />
                        </Link>
                    </Grid>

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