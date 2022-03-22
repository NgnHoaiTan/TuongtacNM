import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, Button } from '@mui/material';
import React from 'react';
import avtUser from '../../Images/user5.jpg';
import demoPost from '../../Images/echgiunnguyen.JPG';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { buttonViewColor, postColor } from "../../common/color.js";
import { makeStyles } from '@mui/styles';

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
    }
}))
const PostCard = () => {
    console.log(buttonViewColor);
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
            />
            <CardMedia
                component="img"
                height="194"
                image={demoPost}
                alt="image post"

            />
            <CardContent sx={{
                py:1, px:0
            }}>
                <Typography sx={{fontWeight:600}}>
                    Loài ếch giun nguyễn
                </Typography>
            </CardContent>
            <CardActions disableSpacing sx={{
                py:0.5,px:0
            }}>
                <IconButton sx={{
                    color: 'white'
                }}>
                    <FavoriteBorderIcon />
                    {/* if react */}
                    {/* FavoriteIcon */}
                    <Typography variant="p" sx={{
                        fontSize:'16px',
                        ml:0.5
                    }}>
                        150
                    </Typography>
                </IconButton>
                <IconButton sx={{
                    color: 'white'
                }}>
                    <CommentIcon />
                    <Typography variant="p" sx={{
                        fontSize:'16px',
                        ml:0.5
                    }}>
                        50
                    </Typography>
                </IconButton>

                <Button variant="contained" className={classes.buttonview} size="small"
                    sx={{
                        ml:1
                    }}
                >
                    <Typography variant="p" className={classes.textinbtn}>
                        Xem chi tiết
                    </Typography>
                </Button>
            </CardActions>



        </Card>
    );
};

export default PostCard;