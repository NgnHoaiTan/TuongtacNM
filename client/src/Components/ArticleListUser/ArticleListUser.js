import React from 'react'
import { Grid } from '@mui/material'

import ArticleUser from './ArticleUser/ArticleUser'

const articleUser = [
    {
        id: 1,
        image: 'http://khoahocphattrien.vn/Images/Uploaded/Share/2016/06/17/Loai-ech-giun-nua-giun-nua-ran-ghe-ron-o-Viet-Nam_2.jpg',
        title: 'ếch giun zzzzzblfmelf ewgmet qwetl;qwe;t ewtnwt ewqmq,tlewmgle rm,glt;eltlet kwe twemtpwetg ewtmewpt ewtl;ewmew gewmtewm l/mfl;aml',
        like: 123,
        comment: 456,
    },
    {
        id: 2,
        image: 'http://khoahocphattrien.vn/Images/Uploaded/Share/2016/06/17/Loai-ech-giun-nua-giun-nua-ran-ghe-ron-o-Viet-Nam_2.jpg',
        title: 'ếch giun zzzzz',
        like: 123,
        comment: 456,
    },
    {
        id: 3,
        image: 'http://khoahocphattrien.vn/Images/Uploaded/Share/2016/06/17/Loai-ech-giun-nua-giun-nua-ran-ghe-ron-o-Viet-Nam_2.jpg',
        title: 'ếch giun zzzzz',
        like: 123,
        comment: 456,
    },
    {
        id: 4,
        image: 'http://khoahocphattrien.vn/Images/Uploaded/Share/2016/06/17/Loai-ech-giun-nua-giun-nua-ran-ghe-ron-o-Viet-Nam_2.jpg',
        title: 'ếch giun zzzzz',
        like: 123,
        comment: 456,
    },
    {
        id: 5,
        image: 'http://khoahocphattrien.vn/Images/Uploaded/Share/2016/06/17/Loai-ech-giun-nua-giun-nua-ran-ghe-ron-o-Viet-Nam_2.jpg',
        title: 'ếch giun zzzzz',
        like: 123,
        comment: 456,
    }
]

const ArticleListUser = () => {
    return (
        <Grid container spacing={2}>
            {articleUser.map((article, index) => (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                    <ArticleUser article={article} />
                </Grid>
            ))}
        </Grid>
    )
}

export default ArticleListUser