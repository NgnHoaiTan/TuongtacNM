import React from 'react'
import { Grid } from '@mui/material'

import video1 from '../../assets/video/video1.mp4'
import video2 from '../../assets/video/video2.mp4'
import VideoUser from './VideoUser/VideoUser'

const videoUser = [
    {
        id: 1,
        video: video1,
        title: 'ếch giun zzzzzblfmelf ewgmet qwetl;qwe;t ewtnwt ewqmq,tlewmgle rm,glt;eltlet kwe twemtpwetg ewtmewpt ewtl;ewmew gewmtewm l/mfl;aml',
        like: 123,
    },
    {
        id: 2,
        video: video2,
        title: 'ếch giun zzzzzblfmelf ewgmet qwetl;qwe;t ewtnwt ewqmq,tlewmgle rm,glt;eltlet kwe twemtpwetg ewtmewpt ewtl;ewmew gewmtewm l/mfl;aml',
        like: 456,
    },
    {
        id: 3,
        video: video1,
        title: 'ếch giun zzzzzblfmelf ewgmet qwetl;qwe;t ewtnwt ewqmq,tlewmgle rm,glt;eltlet kwe twemtpwetg ewtmewpt ewtl;ewmew gewmtewm l/mfl;aml',
        like: 789,
    },
    {
        id: 4,
        video: video2,
        title: 'ếch giun zzzzzblfmelf ewgmet qwetl;qwe;t ewtnwt ewqmq,tlewmgle rm,glt;eltlet kwe twemtpwetg ewtmewpt ewtl;ewmew gewmtewm l/mfl;aml',
        like: 101112,
    },
    {
        id: 5,
        video: video1,
        title: 'ếch giun zzzzzblfmelf ewgmet qwetl;qwe;t ewtnwt ewqmq,tlewmgle rm,glt;eltlet kwe twemtpwetg ewtmewpt ewtl;ewmew gewmtewm l/mfl;aml',
        like: 131415,
    },
]


const VideoListUser = () => {
    return (
        <Grid container spacing={3}>
            {videoUser.map((video, index) => (
                <Grid key={index} item xs={12} lg={4}>
                    <VideoUser video={video} />
                </Grid>
            ))}
        </Grid>
    )
}

export default VideoListUser