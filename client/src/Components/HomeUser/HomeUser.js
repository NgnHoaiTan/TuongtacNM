import React, { useState } from 'react'
import { TabList, TabContext, TabPanel } from '@mui/lab'
import { Tab, Box, Button, Typography } from '@mui/material'
import ArticleListUser from '../ArticleListUser/ArticleListUser'
import VideoListUser from '../VideoListUser/VideoListUser'
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux'
import { getFollows, getFollowing, AsyncFollowSomeone, fetchAsyncFollowingOfUser, fetchAsyncFollowsOfUser, AsyncUnFollowSomeone } from '../../features/Slice/FollowSlice'
import { unwrapResult } from '@reduxjs/toolkit'

const HomeUser = ({ user, authUser }) => {
    const dispatch = useDispatch();

    const followings = useSelector(getFollowing)
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleFollow = async () => {
        let data = {
            user: user._id,
            following: authUser._id
        }

        try {
            let action = await dispatch(AsyncFollowSomeone(data))
            let result = unwrapResult(action);
            await dispatch(fetchAsyncFollowingOfUser(user._id));
            await dispatch(fetchAsyncFollowsOfUser(authUser._id));
        }
        catch (err) {
            console.log(err)
        }
    }
    const handleUnfollow = async () => {
        let data = {
            user: user._id,
            following: authUser._id
        }
        let followId = (followings.find(following => following.following == authUser._id)._id);
        console.log(followId)
        try {
            let action = await dispatch(AsyncUnFollowSomeone(followId))
            let result = unwrapResult(action);
            await dispatch(fetchAsyncFollowingOfUser(user._id));
            await dispatch(fetchAsyncFollowsOfUser(authUser._id));
        }
        catch (err) {
            console.log(err)
        }

    }
    console.log(followings)
    return (
        <div>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', padding: '10px 0 0 40px', display: 'flex', alignContent: 'center', justifyContent: 'space-between' }}>
                    <TabList onChange={handleChange} aria-label="" textColor='secondary' indicatorColor="secondary">
                        <Tab label="Bài viết" value="1" sx={{ fontWeight: 600, fontSize: '16px' }} />
                        <Tab label="Video" value="2" sx={{ fontWeight: 600, fontSize: '16px' }} />
                    </TabList>
                    {user._id !== authUser._id ?
                        <div style={{ padding: '10px', display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                            {(followings.length===0 || followings.every(following => following.following !== authUser._id)) &&
                                
                                <>
                                    <Button onClick={handleFollow} size='small' variant='contained' sx={{ bgcolor: '#4d85ef', '&:hover': { bgcolor: '#4d85ef' } }}>
                                        <Typography sx={{ color: 'white', fontWeight: 500, fontSize: '16px' }}>
                                            Theo dõi
                                        </Typography>
                                        <AddIcon sx={{ color: 'white' }} />
                                    </Button>
                                </>
                            }
                            {(followings.length>0 && followings.find(following => following.following === authUser._id)) &&
                                <> 
                                    <Button onClick={handleUnfollow}  size='small' variant='contained' sx={{ bgcolor: '#4d85ef', '&:hover': { bgcolor: '#4d85ef' } }}>
                                        <Typography sx={{ color: 'white', fontWeight: 500, fontSize: '16px' }}>
                                            Đang theo dõi
                                        </Typography>
                                        <AddIcon sx={{ color: 'white' }} />
                                    </Button>
                                </>
                            }
                        </div>
                        :
                        <>
                        </>
                    }

                </Box>

                <TabPanel value="1">
                    <ArticleListUser />
                </TabPanel>
                <TabPanel value="2">
                    <VideoListUser />
                </TabPanel>
            </TabContext>

        </div>
    )
}

export default HomeUser