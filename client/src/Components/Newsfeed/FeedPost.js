import { Box,Card, CardContent, CardActions, CardMedia, Typography, IconButton, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
const useStyle = makeStyles({
    
    nameofarticle: {
        display: 'box',
        lineClamp: 3,
        boxOrient: 'vertical',
        overflow: 'hidden',
    }
})
const FeedPost = ({article}) => {
    const classes = useStyle();
    return (
        <Box className='feed' sx={{ p: 1 }}>
            <Link to={`/post/${article._id}`}>

                <Card elevation={3} style={{ backgroundColor: '#ededed', borderRadius: '10px' }}>
                    <CardMedia
                        component="img"
                        image={article.avatar}
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
                                    fontSize: '17px'
                                }}
                                variant='p'
                                component='span'
                                gutterBottom
                                className={classes.nameofarticle}
                            >
                                {article.title}
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            </Link>
        </Box>
    );
};

export default FeedPost;