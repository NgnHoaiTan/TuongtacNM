import { Box, Typography, InputBase, Container, Grid, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import PostCard from '../../Components/Card/PostCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsyncPosts, getListPosts } from '../../features/Slice/PostSlice';
import { Link } from 'react-router-dom'
const useStyle = makeStyles({
    searchwrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px'
    },
    searchinput: {
        display: 'flex',
        alignItems: 'center',
        boder: '1px solid black',
        backgroundColor: '#d0d0d0',
        color: 'white',
        padding: '2px 8px',
        borderRadius: '20px',
        width: '60%'

    },
    pagination: {

    }
})
const Posts = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const posts = useSelector(getListPosts);
    console.log(posts);
    useEffect(() => {
        dispatch(fetchAsyncPosts());
    }, [dispatch])
    return (
        <Container maxWidth='lg' disableGutters sx={{
            py: 2,
            minHeight: '100%'
        }}>
            <Box component="div" className={classes.searchwrapper}>
                <div className={classes.searchinput}>
                    <SearchIcon sx={{
                        marginRight: 1
                    }} />
                    <InputBase fullWidth sx={{
                        color: 'black',
                        fontSize: '18px',
                        fontWeight: 500
                    }} />
                </div>
            </Box>
            <Typography variant='h5' sx={{
                my: 3,
                fontWeight: 600
            }}>
                Danh sách bài viết
            </Typography>
            {posts.length > 0 &&
                <>
                    <Grid container spacing={3} sx={{

                    }}>
                        {posts.map(post => {
                            return (
                                <Grid item lg={3} md={4} xs={6} key={post._id}>
                                    <Link to={`/post/${post._id}`}>
                                        <PostCard post={post} />
                                    </Link>
                                </Grid>
                            )
                        })}


                    </Grid>
                    <Box component='div' className={classes.pagination} sx={{
                        my: 2
                    }}>
                        <Button size='small' variant='contained' sx={{
                            mr: 1
                        }}>
                            1
                        </Button>
                        <Button size='small' variant='outlined' sx={{
                            mr: 1
                        }}>
                            2
                        </Button>
                        <Button size='small' variant='outlined' sx={{
                            mr: 1
                        }}>
                            3
                        </Button>
                    </Box>
                </>}
        </Container>

    );
};

export default Posts;