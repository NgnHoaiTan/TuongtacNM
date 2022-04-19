import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import VideoUser from './VideoUser/VideoUser'
import { fetchAsyncVideoByUser,getListVideos } from '../../features/Slice/VideoSlice'
import { useDispatch,useSelector } from 'react-redux'

const VideoListUser = () => {
    const dispatch = useDispatch();
    const videoUser = useSelector(getListVideos);
    console.log(videoUser);
    useEffect(async()=>{
        await dispatch(fetchAsyncVideoByUser('625bf29d05a2408cf630d04e'));
    },[])
    return (
        <Grid container spacing={3}>
            {videoUser&&videoUser.map((video, index) => (
                <Grid key={index} item xs={12} lg={4}>
                    <VideoUser video={video} />
                </Grid>
            ))}
        </Grid>
    )
}

export default VideoListUser