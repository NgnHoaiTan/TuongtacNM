import React, { useEffect, useState } from 'react';
import { Avatar, Box, Grid, Typography, Paper, Button, TextField, List, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import userdemo from '../../Images/user5.jpg';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { fetchAsyncReactionsByPost, createAsyncReaction, getReactions, deleteAsyncReaction, fetchAsyncReactionsInPostByUser, getReactionofUser } from '../../features/Slice/ReactPostSlice';
import { fetchAsyncCommentsByPost, createAsyncComment, getListComments } from '../../features/Slice/CmtPostSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { unwrapResult } from '@reduxjs/toolkit';
import { fetchAsyncUsers, getListUsers, getUser } from '../../features/Slice/UserSlice';
const useStyle = makeStyles({
    horizon_comment: {
        width: '100%',
        borderTop: '3px solid #c8c8c8',
        margin: '10px 0 0'
    },
    number_reaction: {
        alignItems: 'center',
    },
    comment: {
        minHeight:'300px',
        maxHeight: '500px',
        overflow: 'auto'
    }
})
const InteractionPost = () => {
    const classes = useStyle();
    const { id } = useParams();
    const dispatch = useDispatch();
    const reactions = useSelector(getReactions);
    const comments = useSelector(getListComments)
    const reactbyuser = useSelector(getReactionofUser);
    // console.log(reactions);
    // console.log(reactbyuser)
    const [actionReact, setActionReact] = useState(false);
    const [actionComment, setActionComment] = useState(false);
    const [content,setContent] = useState('');
    const user = useSelector(getUser); 
    const listusers = useSelector(getListUsers);
    const data = { postId: id, userId: user._id }
    useEffect(() => {
        const dispatchCall = () => {
            if(user){
                dispatch(fetchAsyncReactionsByPost(id));        
                dispatch(fetchAsyncReactionsInPostByUser(data))
                dispatch(fetchAsyncUsers());
            }
            
        }
        dispatchCall();
    }, [dispatch, actionReact, id])

    useEffect(() => {
        const dispatchCall = () => {
            dispatch(fetchAsyncCommentsByPost(id));
        }
        dispatchCall();
    }, [dispatch, actionComment])

    const handleReact = async () => {
        // add id user after
        setActionReact(false);
        const data = { postId: id,userId:user._id }
        console.log(data);
        try {
            await dispatch(createAsyncReaction(data));
            setActionReact(true);
        } catch (err) {
            console.log('error react:' + err);
        }
    }
    const handleUnreact = async () => {
        // add id user after
        setActionReact(false);
        let data = reactbyuser._id
        try {
            await dispatch(deleteAsyncReaction(data));
            setActionReact(true);
            
        } catch (err) {
            console.log('error unreact:' + err);
        }
    }
    
    const handleComment = async () => {
        setActionComment(false);
        try {
            let data ={
                content:content,
                user:user._id,
                post:id
            }
            const actionresult = await dispatch(createAsyncComment(data));
            const result = unwrapResult(actionresult); 
            setActionComment(true);
            setContent('');
        } catch (err) {
            console.log('error comment: ' + err)
        }
    }
    return (
        <>
            <Box className={classes.reaction} sx={{ display: 'flex', alignContent: 'center' }}>
                {reactbyuser&&Object.keys(reactbyuser).length > 0 ?
                    <Button variant="outlined" onClick={handleUnreact}
                        sx={{
                            padding: '5px',
                            minWidth: '40px',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            color: '#8f8f8f'
                        }}>
                        <FavoriteIcon sx={{ color: 'red' }} />

                    </Button>
                    :
                    <Button variant="outlined" onClick={handleReact}
                        sx={{
                            padding: '5px',
                            minWidth: '40px',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            color: '#8f8f8f'
                        }}>
                        <FavoriteIcon sx={{}} />

                    </Button>
                }

                <div className={classes.number_reaction}>
                    <Typography align='justify' sx={{ mt: 1, ml: 1 }}>
                        {reactions.length}
                    </Typography>
                </div>

            </Box>
            <Paper elevation={1} sx={{ p: 1 }}>
                <Box>
                    <Box component="div" className={classes.comment_input} sx={{ mb: 0.3 }}>

                        <TextField
                            multiline
                            maxRows={4}
                            fullWidth id="comment" name="comment" value={content} onChange={(e)=>setContent(e.target.value)} label="" sx={{
                                p: 0
                            }} />
                    </Box>
                    <Grid className={classes.submit_cmt}>
                        {content.length>0&&<Button variant="outlined" onClick={handleComment}>    
                            <Typography sx={{ fontWeight: 500 }}>
                                Bình luận
                            </Typography>                            
                        </Button>}
                        {content.length===0&&<Button disabled variant="outlined" onClick={()=>{handleComment()}}>    
                            <Typography sx={{ fontWeight: 500 }}>
                                Bình luận
                            </Typography>                            
                        </Button>}
                    </Grid>
                </Box>
                <div className={classes.horizon_comment}>

                </div>
                <Box component="div" className={classes.comment}>
                    <List className={classes.list_comment}>
                        {comments && comments.map((comment) => {
                            return (
                                <Box key={comment._id}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar src={listusers.find(user=>user._id===comment.user).image} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <React.Fragment>
                                                    <Typography component={'span'} sx={{ fontWeight: 500 }}>
                                                        {listusers.find(user=>user._id===comment.user).name}
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                            secondary={
                                                <React.Fragment>
                                                    <Typography component={'span'} sx={{
                                                        display: 'inline'
                                                    }}>
                                                        {comment.content}
                                                    </Typography>
                                                </React.Fragment>
                                            }


                                        />

                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </Box>
                            )
                        })
                        }
                    </List>
                </Box>

            </Paper>
        </>
    );
};

export default InteractionPost;