import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, Button, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import avtUser from '../../Images/user5.jpg';
import demoPost from '../../Images/echgiunnguyen.JPG';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { buttonViewColor, postColor } from "../../common/color.js";
import { makeStyles } from '@mui/styles';
import {Link} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { fetchAsyncUsers, getListUsers } from '../../features/Slice/UserSlice';
import * as moment from 'moment'
const useStyle = makeStyles((theme) => ({
    container: {
        padding: "10px",
        backgroundColor: postColor,
        color: 'white'
    },
    cardimg: {
        objectFit: 'cover',
        objectPosition: 'center',
        height: '150px',
    },
    buttonview: {
        backgroundColor: buttonViewColor,

    },
    textinbtn: {
        fontSize: '12px',
    },
    titlename:{
        display: 'box',
        lineClamp: 2,
        boxOrient: 'vertical',
        overflow: 'hidden',
    },
}))
const PostCard = (props) => {
    const { post } = props;
    const classes = useStyle();
    const dispatch = useDispatch();
    const listusers = useSelector(getListUsers);
    //console.log(listusers.find(user=>user._id===post.user));
    useEffect(() => {
        dispatch(fetchAsyncUsers());
    }, [dispatch])
    return (
        <Card className={classes.container}>
            <CardHeader
                avatar={
                    <Avatar
                        src={listusers.find(user=>user._id===post.user) ? listusers.find(user=>user._id===post.user).image : ''}
                    />
                }
                title={<Typography sx={{color:'white',fontWeight:500}}>{listusers.find(user=>user._id===post.user)?listusers.find(user=>user._id===post.user).name:''}</Typography>}
                subheader={<Typography sx={{color:'white',fontSize:13}}>{moment(post.date_upload).format('DD/MM/YYYY')}</Typography>}
                sx={{ padding: 1 }}
            />
            
                <CardMedia
                    component="img"
                    image={post.avatar}
                    className={classes.cardimg}
                    alt="image post"
                    sx={{
                        mx: "auto"
                    }}

                />
            
                <CardContent sx={{
                    px:0
                }}>
                    
                    <Typography sx={{ fontWeight: 600,height:'50px' }} className={classes.titlename}>
                        {post.title}
                    </Typography>
                    
                </CardContent>
        </Card>
    );
};

export default PostCard;