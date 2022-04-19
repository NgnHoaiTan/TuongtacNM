import React from 'react'
import { Card, CardContent, CardActions, CardMedia, Typography, IconButton, Button } from '@mui/material'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Link } from 'react-router-dom';

const ArticleUser = ({ article }) => {
    return (
        <Link to={`/post/${article._id}`}>
        
        <Card elevation={3} style={{ backgroundColor: '#ededed', borderRadius: '10px' }}>
            <CardMedia
                component="img"
                image={article.avatar}
                style={{
                    height: '180px',
                   
                }}
            />
            <CardContent style={{ padding: '10px',height:'50px'}}>
                <div>
                    <Typography
                        style={{
                            color: '#262626',
                            height: '1.6',
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: '2',
                            fontSize:'18px',
                            fontWeight:500
                        }}
                        variant='p'
                        component='span'
                        gutterBottom
                    >
                        {article.title}
                    </Typography>
                </div>
                {/* <div style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
                    <div>
                        <IconButton sx={{backgroundColor: '#fff', marginRight: '10px'}} size='small'>
                            <FavoriteRoundedIcon sx={{ color: '#FF0000' }} />
                        </IconButton>
                        <Typography variant='body1' component='span' sx={{ color: '#fff' }}>
                            {article.like}
                        </Typography>
                    </div>
                    <div style={{ marginLeft: '30px' }}>
                        <IconButton sx={{backgroundColor: '#fff', marginRight: '10px'}} size='small'>
                            <ChatBubbleIcon sx={{ color: '#999' }} />
                        </IconButton>
                        <Typography variant='body1' component='span' sx={{ color: '#fff' }}>{article.comment}</Typography>
                    </div>
                </div> */}
                {/* <CardActions style={{ display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                    <Link to='/user' style={{ textDecoration: 'none' }}>
                        <Button variant='contained' size='small' sx={{ color: '#fff'}}>
                            Xem chi tiết
                        </Button>
                    </Link>
                </CardActions> */}
            </CardContent>
        </Card>
        </Link>
    )
}

export default ArticleUser