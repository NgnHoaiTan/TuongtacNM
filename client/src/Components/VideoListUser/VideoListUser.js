import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import VideoUser from './VideoUser/VideoUser'
import { fetchAsyncVideoByUser,getListVideos } from '../../features/Slice/VideoSlice'
import { useDispatch,useSelector } from 'react-redux'
import { useParams } from 'react-router'
const VideoListUser = () => {
    const dispatch = useDispatch();
    const videoUser = useSelector(getListVideos);
    const {userId} = useParams()
    console.log(userId);
    useEffect(async()=>{
        await dispatch(fetchAsyncVideoByUser(userId));
    },[])
    return (
        <Grid container spacing={3}>
            {videoUser&&videoUser.map((video, index) => (
                <Grid key={index} item xs={6} lg={4}>
                    <VideoUser video={video} />
                </Grid>
            ))}
        </Grid>
    )
}

export default VideoListUser