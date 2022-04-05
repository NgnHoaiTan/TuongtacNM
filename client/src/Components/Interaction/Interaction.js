import React from 'react';
import { Avatar, Box, Grid, Typography, Paper, Button, TextField, List, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import userdemo from '../../Images/user5.jpg';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
        height: '300px',
        overflow: 'auto'
    }
})
const Interaction = () => {
    const classes = useStyle();
    return (
        <>
            <Box className={classes.reaction} sx={{ display: 'flex', alignContent: 'center' }}>
                <Button variant="outlined" sx={{
                    padding: '5px',
                    minWidth: '40px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    color: '#8f8f8f'
                }}>
                    <FavoriteIcon sx={{}} />

                </Button>
                <div className={classes.number_reaction}>
                    <Typography align='justify' sx={{ mt: 1, ml: 1 }}>
                        109 lượt thích
                    </Typography>
                </div>

            </Box>
            <Paper elevation={1} sx={{ p: 1 }}>
                <Box>
                    <Box component="div" className={classes.comment_input} sx={{ mb: 0.3 }}>

                        <TextField
                            multiline
                            maxRows={4}
                            fullWidth id="comment" name="comment" label="" sx={{
                                p: 0
                            }} />
                    </Box>
                    <Grid className={classes.submit_cmt}>
                        <Button variant="outlined">
                            <Typography sx={{ fontWeight: 500 }}>
                                Bình luận
                            </Typography>
                        </Button>
                    </Grid>
                </Box>
                <div className={classes.horizon_comment}>

                </div>
                <Box component="div" className={classes.comment}>
                    <List className={classes.list_comment}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar src={userdemo} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <React.Fragment>
                                        <Typography component={'span'} sx={{ fontWeight: 500 }}>
                                            Nguyễn Hoài Tân
                                        </Typography>
                                    </React.Fragment>
                                }
                                secondary={
                                    <React.Fragment>
                                        <Typography component={'span'} sx={{
                                            display: 'inline'
                                        }}>
                                            Bài viết rất hay, xin cảm ơn
                                        </Typography>
                                    </React.Fragment>
                                }


                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar src={userdemo} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <React.Fragment>
                                        <Typography component={'span'} sx={{ fontWeight: 500 }}>
                                            Nguyễn Hoài Tân
                                        </Typography>
                                    </React.Fragment>
                                }
                                secondary={
                                    <React.Fragment>
                                        <Typography component={'span'} sx={{
                                            display: 'inline'
                                        }}>
                                            Bài viết rất hay, xin cảm ơn
                                        </Typography>
                                    </React.Fragment>
                                }


                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar src={userdemo} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <React.Fragment>
                                        <Typography component={'span'} sx={{ fontWeight: 500 }}>
                                            Nguyễn Hoài Tân
                                        </Typography>
                                    </React.Fragment>
                                }
                                secondary={
                                    <React.Fragment>
                                        <Typography component={'span'} sx={{
                                            display: 'inline'
                                        }}>
                                            Bài viết rất hay, xin cảm ơn
                                        </Typography>
                                    </React.Fragment>
                                }


                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar src={userdemo} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <React.Fragment>
                                        <Typography component={'span'} sx={{ fontWeight: 500 }}>
                                            Nguyễn Hoài Tân
                                        </Typography>
                                    </React.Fragment>

                                }
                                secondary={
                                    <React.Fragment>
                                        <Typography component={'span'} sx={{
                                            display: 'inline'
                                        }}>
                                            Bài viết rất hay, xin cảm ơn
                                        </Typography>
                                    </React.Fragment>
                                }


                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </List>
                </Box>

            </Paper>
        </>
    );
};

export default Interaction;