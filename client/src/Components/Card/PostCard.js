import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, Button, Grid } from '@mui/material';
import React from 'react';
import avtUser from '../../Images/user5.jpg';
import demoPost from '../../Images/echgiunnguyen.JPG';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { buttonViewColor, postColor } from "../../common/color.js";
import { makeStyles } from '@mui/styles';
import {Link} from 'react-router-dom';
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
    }
}))
const PostCard = (props) => {
    const { post } = props;
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
                    py: 1, px: 0
                }}>
                    
                    <Typography sx={{ fontWeight: 600 }}>
                        {post.title}
                    </Typography>
                    
                </CardContent>
            
            <CardActions disableSpacing sx={{
                py: 0.5, px: 0
            }}>
                <Grid container spacing={1} sx={{
                    justifyContent: 'center',
                    align: 'center'
                }}>
                    <Grid item lg={12}>
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
                    </Grid>

                    {/* <Grid item lg={12} sx={{
                        alignItem: 'center'
                    }}>
                        <Button variant="contained" className={classes.buttonview} size="small"

                        >
                            <Typography variant="p" className={classes.textinbtn}>
                                Xem chi tiết
                            </Typography>
                        </Button>
                    </Grid> */}
                </Grid>




            </CardActions>



        </Card>
    );
};

export default PostCard;