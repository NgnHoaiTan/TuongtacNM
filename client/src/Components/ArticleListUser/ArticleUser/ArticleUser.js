import React from 'react'
import { Card, CardContent, CardActions, CardMedia, Typography, IconButton, Button } from '@mui/material'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Link } from 'react-router-dom';

const ArticleUser = ({ article }) => {
    return (
        <Card style={{ backgroundColor: '#5E2C1C', borderRadius: '10px' }}>
            <CardMedia
                style={{
                    backgroundImage: `url(${article.image})`,
                    width: '94%',
                    height: '200px',
                    margin: '10px 10px 0 10px',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '10px',
                }}
            />
            <CardContent>
                <div>
                    <Typography
                        style={{
                            color: '#fff',
                            height: '1.6',
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: '1',
                        }}
                        variant='h6'
                        component='span'
                        gutterBottom
                    >
                        {article.title}
                    </Typography>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>
                        <IconButton>
                            <FavoriteRoundedIcon sx={{ color: '#FF0000' }} />
                        </IconButton>
                        <Typography variant='h6' component='span' sx={{ color: '#fff' }}>
                            {article.like}
                        </Typography>
                    </div>
                    <div style={{ marginLeft: '30px' }}>
                        <IconButton>
                            <ChatBubbleIcon sx={{ color: '#999' }} />
                        </IconButton>
                        <Typography variant='h6' component='span' sx={{ color: '#fff' }}>{article.comment}</Typography>
                    </div>
                </div>
                <CardActions style={{ display: 'flex', justifyContent: 'center', marginTop: '15px'}}>
                    <Link to='/user' style={{ textDecoration: 'none' }}>
                        <Button variant='contained' size='small' sx={{ color: '#fff'}}>
                            Xem chi tiết
                        </Button>
                    </Link>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default ArticleUser