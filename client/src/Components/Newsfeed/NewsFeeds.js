import { Box, Container, Grid, Typography, Button, Tabs, Tab } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FeedPost from './FeedPost';
import { makeStyles } from '@mui/styles';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { getFollowing, fetchAsyncFollowingOfUser } from '../../features/Slice/FollowSlice'
import { unwrapResult } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';
import { getListUsers, getUser } from '../../features/Slice/UserSlice';
import { getListPosts, getPost } from '../../features/Slice/PostSlice';
import { getListVideos } from '../../features/Slice/VideoSlice';
import FeedVideo from './FeedVideo';
import FollowUsers from './FollowUsers';
const useStyle = makeStyles((theme) => ({
    container: {
        marginTop: "40px",
        marginBottom: '40px',
        backgroundColor: "white",
        padding: '0 40px',
    },
    wrapperexplore: {
        backgroundColor: '#e6e6e6',
        padding: "30px",
        borderRadius: "20px",
        height: '600px',
        overflowY: 'auto'
    },
    btnOption: {
        marginTop: 10,

    },
    text: {
        marginBottom: 20
    },
    btnseemore: {
        display: 'flex',
        justifyContent: 'flex-end'
    }

}));
const NewsFeeds = ({ user }) => {
    const classes = useStyle();
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const listfollowings = useSelector(getFollowing);
    const posts = useSelector(getListPosts)
    const videos = useSelector(getListVideos);
    const users = useSelector(getListUsers);
    const dispatch = useDispatch()
    const followings = listfollowings.slice(0, listfollowings.length > 8 ? 8 : listfollowings.length);
    

    useEffect(() => {
        if(Object.keys(user).length>0){
            dispatch(fetchAsyncFollowingOfUser(user._id))
        }
        
    }, [dispatch, user._id])
    return (
        <>
            {followings && followings.length > 0 &&
                <>
                    <Container maxWidth="xl" className={classes.container} sx={{ position: 'relative' }}>
                        <Box className={classes.wrapperexplore}>
                            <Box component="div" className={classes.text}>
                                <Typography sx={{ fontWeight: 600, fontSize: '21px' }}>
                                    Đang theo dõi
                                </Typography>

                            </Box>
                            <Box>
                                <TabContext value={value}>
                                    <Box sx={{
                                        borderBottom: 1, borderColor: "#2269D2"
                                    }}>
                                        <TabList onChange={handleChange} aria-label="tab trantition" >
                                            <Tab label="Bài viết" value="1" sx={{
                                                color: 'black',
                                                fontWeight: 600
                                            }} />
                                            <Tab label="Video - câu chuyện" value="2" sx={{
                                                color: 'black',
                                                fontWeight: 600,

                                            }} />
                                            <Tab label="Người dùng" value="3" sx={{
                                                color: 'black',
                                                fontWeight: 600
                                            }} />
                                        </TabList>
                                    </Box>

                                    <TabPanel value="1" index={0}>
                                        <Grid container spacing={2}>
                                            {followings
                                                .map((following) => {
                                                    return (
                                                        <React.Fragment key={following._id}>
                                                            {(posts
                                                                .filter((post) => (post.user === following.following)))
                                                                .map(post => {
                                                                    return (
                                                                        <React.Fragment key={post._id}>
                                                                            <Grid item md={3} lg={2.4} >
                                                                                <FeedPost article={post} />

                                                                            </Grid>
                                                                        </React.Fragment >

                                                                    )
                                                                })}
                                                        </React.Fragment>
                                                    )



                                                    //console.log(posts.filter((post, index) => (post.user === following.following)) + index)

                                                })}
                                        </Grid>
                                    </TabPanel>
                                    <TabPanel value="2" index={1}>
                                        <Grid container spacing={2}>
                                            {followings.map(following => (
                                                <React.Fragment key={following._id}>
                                                    {
                                                        (videos.filter((video, index) => (video.user === following.following))).map(video => {
                                                            return (
                                                                <React.Fragment key={video._id}>
                                                                    <Grid item md={3} lg={2.4} >
                                                                        <FeedVideo video={video} />
                                                                    </Grid>

                                                                </React.Fragment>

                                                            )
                                                        })
                                                    }
                                                </React.Fragment>


                                            ))}
                                        </Grid>
                                    </TabPanel>
                                    <TabPanel value="3" index={2}>
                                        <Grid container spacing={2}>
                                            {followings.map(following => (
                                                <React.Fragment key={following._id}>
                                                    {
                                                        (users.filter((user, index) => (user._id === following.following))).map(user => {
                                                            return (
                                                                <React.Fragment key={user._id}>
                                                                    <Grid item md={3} lg={2.4}>
                                                                        <FollowUsers user={user} />
                                                                    </Grid>

                                                                </React.Fragment>

                                                            )
                                                        })
                                                    }
                                                </React.Fragment>

                                            ))}
                                        </Grid>
                                    </TabPanel>
                                </TabContext>
                            </Box>


                        </Box>
                    </Container>
                </>
            }
        </>
    );
};

export default NewsFeeds;