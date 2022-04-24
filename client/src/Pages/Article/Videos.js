import { Box, Typography, InputBase, Container, Grid, Button, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import VideoCard from '../../Components/Card/VideoCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsyncSearchVideos, fetchAsyncVideos, getListVideos } from '../../features/Slice/VideoSlice';
import { Link } from 'react-router-dom';
const useStyle = makeStyles({
    searchwrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '20px'
    },
    searchinput: {
        display: 'flex',
        alignItems: 'center',
        boder: '1px solid black',
        backgroundColor: '#d0d0d0',
        color: 'white',
        padding: '2px 8px',
        borderRadius: '20px',
        width: '60%'

    },
    pagination: {

    }
})
const Videos = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const videos = useSelector(getListVideos);
    const [searchText, setSearchText] = useState('')
    const [actionSearch,setActionSearch] = useState(false);
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        dispatch(fetchAsyncVideos());
    }, [dispatch])
    useEffect(() => {
        setLoading(true);
        const searchcall = () => {
            if (searchText === '') {
                setTimeout(async () => {
                    await dispatch(fetchAsyncVideos());
                    setLoading(false)
                }, 500)

            }
            else {
                setTimeout(async () => {
                    await dispatch(fetchAsyncSearchVideos(searchText))
                    setLoading(false)
                }, 500)

            }
        }
        searchcall()

    }, [searchText, dispatch])

    const handleSearch = async () => {
        let searchtext = searchText;
        try {
            await dispatch(fetchAsyncSearchVideos(searchtext))
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <Container maxWidth='lg' disableGutters sx={{
            py: 2,
            minHeight: '700px'
        }}>
            <Box component="div" className={classes.searchwrapper}>
                <div className={classes.searchinput}>
                    <IconButton onClick={handleSearch}>
                        <SearchIcon sx={{
                            marginRight: 1
                        }}

                        />
                    </IconButton>

                    <InputBase fullWidth sx={{
                        color: 'black',
                        fontSize: '18px',
                        fontWeight: 500
                    }}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}

                    />
                </div>
            </Box>
            <Typography variant='h5' sx={{
                my: 3,
                fontWeight: 600
            }}>
                Danh sách bài viết
            </Typography>
            <Grid container spacing={3} sx={{

            }}>
                {videos && videos.map(video => {
                    return (
                        <Grid item lg={3} md={4} xs={6} key={video._id}>
                            <Link to={`/video/${video._id}`}>
                                <VideoCard video={video} />
                            </Link>
                        </Grid>
                    )
                })}


            </Grid>
            {/* <Box component='div' className={classes.pagination} sx={{
                my: 2
            }}>
                <Button size='small' variant='contained' sx={{
                    mr: 1
                }}>
                    1
                </Button>
                <Button size='small' variant='outlined' sx={{
                    mr: 1
                }}>
                    2
                </Button>
                <Button size='small' variant='outlined' sx={{
                    mr: 1
                }}>
                    3
                </Button>
            </Box> */}
        </Container>

    );
};

export default Videos;