import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, Button } from '@mui/material';
import React from 'react';
import avtUser from '../../Images/user5.jpg';
import demoPost from '../../Images/echgiunnguyen.JPG';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { buttonViewColor, postColor } from "../../common/color.js";
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
    container: {
        padding: "10px",
        backgroundColor: postColor,
        color: 'white'
    },
    buttonview: {
        backgroundColor: buttonViewColor,

    },
    textinbtn: {
        fontSize: '12px',
    },
    cardimg: {
        objectFit: 'cover',
        objectPosition: 'center',
        height: '150px',
    },
}))
const VideoCard = (props) => {
    const { video } = props;
    const classes = useStyle();
    return (
        <Card className={classes.container}>
            <CardHeader
                avatar={
                    <Avatar
                        src={avtUser}
                    />


                }
                title="Chorizo Paella"
                subheader="March 20, 2022"
                sx={{ padding: 1 }}
            />
            <Link to={`/video/${video._id}`}>
                <CardMedia
                    component="video"
                    height="194"
                    src={video.videourl}
                    className={classes.cardimg}
                    alt="image video"
                    sx={{
                        mx: "auto"
                    }}

                />
            </Link>

            <Link to={`/video/${video._id}`}>
                <CardContent sx={{
                    py: 1, px: 0, height: 30
                }}>
                    <Typography sx={{ fontWeight: 600 }}>
                        {video.title}
                    </Typography>
                </CardContent>
            </Link>

            <CardActions disableSpacing sx={{
                py: 0.5, px: 0
            }}>
                <IconButton sx={{
                    color: 'white'
                }}>
                    <FavoriteBorderIcon />
                    {/* if react */}
                    {/* FavoriteIcon */}
                    <Typography variant="p" sx={{
                        fontSize: '16px',
                        ml: 0.5
                    }}>
                        150
                    </Typography>
                </IconButton>
                <IconButton sx={{
                    color: 'white'
                }}>
                    <CommentIcon />
                    <Typography variant="p" sx={{
                        fontSize: '16px',
                        ml: 0.5
                    }}>
                        50
                    </Typography>
                </IconButton>
            </CardActions>



        </Card>
    );
};

export default VideoCard;