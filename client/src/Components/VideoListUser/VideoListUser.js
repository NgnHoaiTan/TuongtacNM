import React from 'react'
import { Grid } from '@mui/material'

import VideoUser from './VideoUser/VideoUser'

const videoUser = [
    {
        id: 1,
        video: '',
        title: 'ếch giun zzzzzblfmelf ewgmet qwetl;qwe;t ewtnwt ewqmq,tlewmgle rm,glt;eltlet kwe twemtpwetg ewtmewpt ewtl;ewmew gewmtewm l/mfl;aml',
        like: 123,
    },
    {
        id: 2,
        video: '',
        title: 'ếch giun zzzzzblfmelf ewgmet qwetl;qwe;t ewtnwt ewqmq,tlewmgle rm,glt;eltlet kwe twemtpwetg ewtmewpt ewtl;ewmew gewmtewm l/mfl;aml',
        like: 456,
    },
    {
        id: 3,
        video: '',
        title: 'ếch giun zzzzzblfmelf ewgmet qwetl;qwe;t ewtnwt ewqmq,tlewmgle rm,glt;eltlet kwe twemtpwetg ewtmewpt ewtl;ewmew gewmtewm l/mfl;aml',
        like: 789,
    },
    {
        id: 4,
        video: '',
        title: 'ếch giun zzzzzblfmelf ewgmet qwetl;qwe;t ewtnwt ewqmq,tlewmgle rm,glt;eltlet kwe twemtpwetg ewtmewpt ewtl;ewmew gewmtewm l/mfl;aml',
        like: 101112,
    },
    {
        id: 5,
        video: '',
        title: 'ếch giun zzzzzblfmelf ewgmet qwetl;qwe;t ewtnwt ewqmq,tlewmgle rm,glt;eltlet kwe twemtpwetg ewtmewpt ewtl;ewmew gewmtewm l/mfl;aml',
        like: 131415,
    },
]


const VideoListUser = () => {
    return (
        <Grid container spacing={2}>
            {videoUser.map((video, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                    <VideoUser video={video} />
                </Grid>
            ))}
        </Grid>
    )
}

export default VideoListUser