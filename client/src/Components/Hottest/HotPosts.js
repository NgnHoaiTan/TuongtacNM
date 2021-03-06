import { Card, Grid, CardContent, CardActions, CardMedia, Typography, IconButton, Button, CardHeader, Avatar } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getListUsers } from '../../features/Slice/UserSlice';
import * as moment from 'moment'
import { fetchAsyncTopReaction, getTopReactions } from '../../features/Slice/ReactPostSlice'
import { getListPosts, fetchAsyncPosts } from '../../features/Slice/PostSlice';
const useStyle = makeStyles({
    nameofarticle: {
        display: 'box',
        lineClamp: 2,
        boxOrient: 'vertical',
        overflow: 'hidden',
    }
})

const HotPosts = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const topreactions = useSelector(getTopReactions);
    const posts = useSelector(getListPosts);
    const users = useSelector(getListUsers);
    useEffect(() => {
        dispatch(fetchAsyncTopReaction())
        dispatch(fetchAsyncPosts());
    }, [])
    console.log(topreactions);
    return (
        <Grid container spacing={2}>
            {topreactions && topreactions.map(reaction => (
                <Grid item md={4} key={reaction._id}>
                    <Card elevation={0} style={{ backgroundColor: '#ededed', borderRadius: '10px' }}>

                        <CardHeader
                            avatar={
                                <Avatar src={users.find(user => user._id === posts.find(post => post._id === reaction._id).user).image} aria-label="recipe" />

                            }
                            title={users.find(user => user._id === posts.find(post => post._id === reaction._id).user).name}
                            subheader={moment(posts.find(post => post._id === reaction._id).date_upload).format('DD/MM/YYYY')}
                        />
                        <CardMedia
                            component="img"
                            image={posts.find(post => post._id === reaction._id).avatar}
                            style={{
                                height: '180px',

                            }}
                        />
                        <CardContent style={{ padding: '10px', height: '65px' }}>
                            <Link to={`post/${posts.find(post => post._id === reaction._id)._id}`}>
                                
                                <div>
                                    <Typography
                                        sx={{
                                            color: '#262626',
                                            fontWeight: 600,
                                            fontSize: '17px'
                                        }}
                                        variant='p'
                                        component='span'
                                        gutterBottom
                                        className={classes.nameofarticle}
                                    >
                                        {posts.find(post => post._id === reaction._id).title}
                                    </Typography>
                                </div>
                            </Link>

                        </CardContent>
                        <CardActions disableSpacing>
                            <div>

                                <IconButton aria-label="add to favorites" >
                                    <FavoriteIcon sx={{ fontSize: 25 }} />
                                </IconButton>
                                {reaction.count}
                            </div>

                        </CardActions>
                    </Card>
                </Grid>
            ))}

        </Grid>
    );
};

export default HotPosts;