import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import { fetchAsyncPostByUser,getListPosts } from '../../features/Slice/PostSlice';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ArticleUser from './ArticleUser/ArticleUser'



const ArticleListUser = () => {
    const dispatch = useDispatch();
    const articleUser = useSelector(getListPosts);
    console.log(articleUser);
    useEffect(async()=>{
        dispatch(fetchAsyncPostByUser('625bf29d05a2408cf630d04e'));  
    },[])
    
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