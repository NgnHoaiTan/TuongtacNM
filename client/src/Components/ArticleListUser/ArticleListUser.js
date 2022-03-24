import React from 'react'
import { Grid } from '@mui/material'

import ArticleUser from './ArticleUser/ArticleUser'

const articleUser = [
    {
        id: 1,
        image: 'https://scontent.fsgn2-2.fna.fbcdn.net/v/t39.30808-6/258435246_2819886521565394_3094128005690604096_n.jpg?stp=dst-jpg_s851x315&_nc_cat=103&ccb=1-5&_nc_sid=da31f3&_nc_ohc=blUWK3G-rjMAX-wWDtU&_nc_ht=scontent.fsgn2-2.fna&oh=00_AT-vzEOf6THHqP_qjiH-WRguxo7ldjLTV7b5ww65kTMxkg&oe=6241F3F8',
        title: 'Động vật quý hiếm',
        like: 123,
        comment: 456,
    },
    {
        id: 2,
        image: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.6435-9/52941724_484496008621608_4496267323627274240_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=hpToWA-52HwAX9w_I47&_nc_oc=AQm9cPE5DNgt5nP-82ziYOTsKZNG6WuDRkq1uCM9z-G4hZF9I8-lrijrQzJxRq68vu8&_nc_ht=scontent.fsgn2-6.fna&oh=00_AT-CrKca6meNaezMFtUuWvsqnYv7r8hY67pcL2yk1G0zYg&oe=62614AC7',
        title: 'Động vật quý hiếm',
        like: 123,
        comment: 456,
    },
    {
        id: 3,
        image: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.6435-9/150044181_2917938981817628_6561242240184684803_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=bvoUCQiQ_d8AX-AlIBP&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT89WkRwykWuvXjLq3iKs4YfiVBlM87eMgdU31XLawunXA&oe=6260EF29',
        title: 'Động vật quý hiếm',
        like: '99999...',
        comment: '99999...',
    },
    {
        id: 4,
        image: 'https://scontent.fsgn2-1.fna.fbcdn.net/v/t1.6435-9/121191827_2754036924866534_7277175258441906505_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=ej6nHj0VGHQAX8U_L2o&_nc_ht=scontent.fsgn2-1.fna&oh=00_AT88l4unkd0H4Ci5uNzBbwU43TakrJcmQRVD8poLZeXOdg&oe=6262F34D',
        title: 'Động vật quý hiếm',
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