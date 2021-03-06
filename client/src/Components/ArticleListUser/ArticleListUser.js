import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import { fetchAsyncPostByUser,getListPosts } from '../../features/Slice/PostSlice';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ArticleUser from './ArticleUser/ArticleUser'



const ArticleListUser = () => {
    const dispatch = useDispatch();
    const {userId} = useParams();
    const articleUser = useSelector(getListPosts);
  
    useEffect(async()=>{
        dispatch(fetchAsyncPostByUser(userId));  
    },[])
    
    return (
        <Grid container spacing={3}>
            {articleUser.map((article, index) => (
                <Grid key={index} item xs={6} md={4}>
                    <ArticleUser article={article} />
                </Grid>
            ))}
        </Grid>
    )
}

export default ArticleListUser