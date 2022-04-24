import { Box, Card, CardContent, CardActions, CardMedia, Typography, IconButton, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsyncFollowsOfUser, getFollows } from '../../features/Slice/FollowSlice';
const useStyle = makeStyles({

    nameofuser: {
        display: 'box',
        lineClamp: 2,
        boxOrient: 'vertical',
        overflow: 'hidden',
    }
})
const FollowUsers = ({ user }) => {
    const classes = useStyle();
    const follows = useSelector(getFollows);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAsyncFollowsOfUser(user._id))
    }, [dispatch, user._id])
    return (
        <Box className='feed' sx={{ p: 1 }}>
            <Link to={`/user/${user._id}`}>

                <Card elevation={3} style={{ backgroundColor: '#ededed', borderRadius: '10px' }}>
                    <CardMedia
                        component="img"
                        image={user.image}
                        style={{
                            height: '150px',
                            width: '100%',
                            objectFit: 'cover'
                        }}
                    />
                    <CardContent style={{ padding: '10px', height: '60px' }}>
                        <div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <Typography
                                    sx={{
                                        color: '#262626',
                                        fontWeight: 500,
                                        fontSize: '16px',
                                        margin: '0 auto',

                                    }}
                                    variant='p'
                                    component='span'
                                    gutterBottom
                                    className={classes.nameofuser}
                                >
                                    {user.name}
                                </Typography>
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <Typography sx={{ fontSize: '14px' }}>
                                    {follows.length} Lượt theo dõi
                                </Typography>
                            </div>

                        </div>
                    </CardContent>
                </Card>
            </Link>
        </Box>
    );
};

export default FollowUsers;