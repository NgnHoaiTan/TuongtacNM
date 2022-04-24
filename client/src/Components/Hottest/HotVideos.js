import { Card, Grid, CardContent, CardActions, CardMedia, Typography, IconButton, Button, CardHeader, Avatar } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@mui/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import * as moment from 'moment'
import { getListUsers } from '../../features/Slice/UserSlice';
import { fetchAsyncTopReaction, getTopReactions } from '../../features/Slice/ReactVidSlice'
import { getListVideos, fetchAsyncVideos } from '../../features/Slice/VideoSlice';
import { Link } from 'react-router-dom'
const useStyle = makeStyles({
    nameofarticle: {
        display: 'box',
        lineClamp: 2,
        boxOrient: 'vertical',
        overflow: 'hidden',
    }
})

const HotVideos = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const topreactions = useSelector(getTopReactions);
    const videos = useSelector(getListVideos);
    const users = useSelector(getListUsers);
    useEffect(() => {
        dispatch(fetchAsyncTopReaction())
        dispatch(fetchAsyncVideos());
    }, [])
    console.log(topreactions)
    return (
        <Grid container spacing={2}>
            {topreactions && topreactions.map(reaction => (
                <Grid item md={4} key={reaction._id}>
                    <Card elevation={0} style={{ backgroundColor: '#ededed', borderRadius: '10px' }}>

                        <CardHeader
                            avatar={
                                <Avatar src={users.find(user => user._id === videos.find(video => video._id === reaction._id).user).image} aria-label="recipe" />

                            }
                            title={users.find(user => user._id === videos.find(video => video._id === reaction._id).user).name}
                            subheader={moment(videos.find(video => video._id === reaction._id).date_upload).format('DD/MM/YYYY')}
                        />
                        <div>
                            <video
                                style={{
                                    height: '180px',
                                    width: '100%',
                                    objectFit: 'cover',

                                }}
                                type="video/mp4"
                                src={videos.find(video => video._id === reaction._id).videourl}
                                controls
                            />

                        </div>
                        <CardContent style={{ padding: '10px', height: '65px' }}>

                            <div>
                                <Link to={`video/${videos.find(video => video._id === reaction._id)._id}`}>
                                    <Typography
                                        style={{
                                            color: 'black',
                                            fontSize: '16px',
                                            fontWeight: 500,

                                        }}

                                        component='span'
                                        gutterBottom
                                        className={classes.nameofarticle}
                                    >
                                        {videos.find(video => video._id === reaction._id).title}
                                    </Typography>
                                </Link>

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

export default HotVideos;