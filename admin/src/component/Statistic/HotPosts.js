import { Card, Grid, CardContent, CardActions, CardMedia, Typography, IconButton, Button, CardHeader, Avatar } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { fetchAsyncTopReaction, getTopReactions } from '../../features/Slice/ReactionPostSlice';
import { fetchAsyncPosts, getListPosts } from '../../features/Slice/PostSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getListUsers } from '../../features/Slice/UserSlice';
import * as moment from 'moment'
const useStyle = makeStyles({
    nameofarticle: {
        display: 'box',
        lineClamp: 3,
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
        const call = async()=>{
            await dispatch(fetchAsyncTopReaction())
            await dispatch(fetchAsyncPosts());
        }
        
    }, [])
    return (
        <Grid container spacing={2}>
            {topreactions&&posts && users && topreactions.map(reaction => (
                <Grid item md={4} key={reaction._id}>
                    <Card elevation={0} style={{ backgroundColor: '#ededed', borderRadius: '10px' }}>
                        
                        <CardHeader
                            avatar={
                                <Avatar src={users.find(user=>user._id === posts.find(post => post._id === reaction._id).user).image} aria-label="recipe" />
                                
                            }
                            title={users.find(user=>user._id === posts.find(post => post._id === reaction._id).user).name}
                            subheader={moment(posts.find(post => post._id === reaction._id).date_upload).format('DD/MM/YYYY')}
                        />
                        <CardMedia
                            component="img"
                            image={posts.find(post => post._id === reaction._id).avatar}
                            style={{
                                height: '180px',

                            }}
                        />
                        <CardContent style={{ padding: '10px', height: '85px' }}>
                            <div>
                                <Typography
                                    sx={{
                                        color: '#262626',
                                        fontWeight: 500,
                                        fontSize: '16px'
                                    }}
                                    variant='p'
                                    component='span'
                                    gutterBottom
                                    className={classes.nameofarticle}
                                >
                                    {posts.find(post => post._id === reaction._id).title}
                                </Typography>
                            </div>
                        </CardContent>
                        <CardActions disableSpacing>
                            <div>

                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
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