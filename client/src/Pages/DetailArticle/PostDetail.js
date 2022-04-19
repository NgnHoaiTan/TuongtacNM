import { Avatar, Box, Container, Grid, Typography, Table, TableHead, TableBody, TableRow, Paper } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import React, { useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import userdemo from '../../Images/user5.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import animalDemo1 from '../../Images/echgiunnguyen.JPG';
import markImg from '../../Images/gps.png';
import Map, { Marker, FullscreenControl, Layer } from 'react-map-gl';
import { createTheme } from '@mui/material/styles';
import { useParams } from 'react-router';
import { fetchAsyncPostById, getPost } from '../../features/Slice/PostSlice';
import { useDispatch, useSelector } from 'react-redux';
import InteractionPost from '../../Components/Interaction/InteractionPost';

const theme = createTheme();

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        padding: '13px'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));




const parkLayer = {
    id: 'landuse_park',
    type: 'fill',
    source: 'mapbox',
    'source-layer': 'landuse',
    filter: ['==', 'class', 'park'],
    paint: {
        'fill-color': '#4E3FC8'
    }
};
const useStyle = makeStyles({
    root: {
        backgroundColor: '#EEEEEE',
        minHeight: '100vh'
    },
    userinfo: {
        display: 'flex',
    },
    span_title: {
        fontWeight: 500
    },
    wrapper_map: {
        width: '100%',

    },
    table_maintainment: {
        margin: '10px 0 15px'
    },
    horizon: {
        width: '100%',
        borderTop: '3px solid #c8c8c8',
        margin: '10px 0 10px'
    },
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

const PostDetail = () => {
    const classes = useStyle();
    const dispatch = useDispatch();
    const { id } = useParams();
    const post = useSelector(getPost);
    useEffect(() => {
        const dispatchCall = async()=>{
            await dispatch(fetchAsyncPostById(id))
        }
        dispatchCall();
    }, [dispatch,id])
    
    return (
        <>
            {post!=={} &&
                <div className={classes.root}>
                    <Container maxWidth='md' sx={{
                        bgcolor: 'white',
                        py: 2,

                    }}>

                        <Box component='div' className={classes.userinfo}>
                            <Avatar alt='user image' src={userdemo} sx={{ mr: 1 }} />
                            <div className={classes.username}>
                                <Typography sx={{
                                    fontWeight: 500
                                }}>
                                    Nguyễn Hoài Tân
                                </Typography>
                                <Typography variant="body2" sx={{
                                    fontWeight: 300,

                                }}>
                                    {post.date_upload}
                                </Typography>
                            </div>
                        </Box>
                        <Box component='div' className={classes.postinfo}>
                            <Typography className='title_of_post' sx={{ fontWeight: 500, fontSize: '18px', my: 1 }}>
                                {post.title}
                            </Typography>
                            <Grid container spacing={3}>
                                <Grid item md={5} xs={12}>
                                    <Carousel infiniteLoop>
                                        <div>
                                            <img src={animalDemo1} alt='img of article' />
                                        </div>

                                    </Carousel>
                                </Grid>
                                <Grid item md={7} xs={12} className={classes.general_info}>
                                    <Box component='div'>
                                        <Typography sx={{ fontWeight: 400, mb: 0.5 }}>
                                            <span className={classes.span_title}>Tên khoa học:</span> {post.scientific_name}
                                        </Typography>
                                        <Typography sx={{ fontWeight: 400, mb: 0.5 }}>
                                            <span className={classes.span_title}>Tên địa phương:</span> {post.region_name}
                                        </Typography>
                                        <Typography sx={{ fontWeight: 400, mb: 0.5 }}>
                                            <span className={classes.span_title}>Tên tiếng việt:</span> {post.vietnamese_name}
                                        </Typography>
                                        <Typography sx={{ fontWeight: 400, mb: 0.5 }}>
                                            <span className={classes.span_title}>Giới:</span> {post.kingdom}
                                        </Typography>
                                        <Typography sx={{ fontWeight: 400, mb: 0.5 }}>
                                            <span className={classes.span_title}>Ngành:</span> {post.phylum}
                                        </Typography>
                                        <Typography sx={{ fontWeight: 400, mb: 0.5 }}>
                                            <span className={classes.span_title}>Lớp:</span> {post.class}
                                        </Typography>
                                        <Typography sx={{ fontWeight: 400, mb: 0.5 }}>
                                            <span className={classes.span_title}>Bộ:</span> {post.order}
                                        </Typography>
                                        <Typography sx={{ fontWeight: 400, mb: 0.5 }}>
                                            <span className={classes.span_title}>Họ:</span> {post.family}
                                        </Typography>
                                        <Typography sx={{ fontWeight: 400, mb: 0.5 }}>
                                            <span className={classes.span_title}>Giá trị sử dụng:</span> {post.value_of_use}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <div className={classes.morphology}>
                                <Typography sx={{ fontWeight: 500, }}>
                                    Đặc điểm hình thái
                                </Typography>
                                <Typography sx={{ px: 1 }}>
                                    {post.morphology}
                                </Typography>
                            </div>
                            <div className={classes.maintainment}>
                                <Typography sx={{ fontWeight: 500, }}>
                                    Tình trạng bảo tồn
                                </Typography>
                                <Grid item xs={12}>
                                    {post.state_of_maintainment&&
                                    <Box component={Paper} className={classes.table_maintainment}>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <StyledTableCell>Theo IUC</StyledTableCell>
                                                    <StyledTableCell>Theo sách đỏ Việt Nam</StyledTableCell>
                                                    <StyledTableCell>Theo Nghị định 32/2006/NĐCP</StyledTableCell>
                                                    <StyledTableCell>Theo CITES</StyledTableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell sx={{
                                                        fontWeight: 500,
                                                        [theme.breakpoints.down(400)]: {
                                                            padding: '5px'

                                                        },
                                                    }} >
                                                        {post.state_of_maintainment['iuc']?post.state_of_maintainment['iuc']:''}
                                                    </TableCell>
                                                    <TableCell sx={{
                                                        fontWeight: 500,
                                                        [theme.breakpoints.down(400)]: {
                                                            padding: '5px'

                                                        },
                                                    }} >
                                                        {post.state_of_maintainment['sachdo']}
                                                    </TableCell>
                                                    <TableCell sx={{
                                                        fontWeight: 500,
                                                        [theme.breakpoints.down(400)]: {
                                                            padding: '5px'

                                                        },
                                                    }} >
                                                        {post.state_of_maintainment['ndcp']}
                                                    </TableCell>
                                                     <TableCell sx={{
                                                        fontWeight: 500,
                                                        [theme.breakpoints.down(400)]: {
                                                            padding: '5px'

                                                        },
                                                    }} >
                                                        {post.state_of_maintainment['cites']}
                                                    </TableCell> 
                                                </TableRow>
                                            </TableBody>

                                        </Table>
                                    </Box>}
                                </Grid>

                            </div>


                            <Grid container>
                                <Grid item lg={6} xs={12}>
                                    <div className={classes.maintainment}>
                                        <Typography sx={{ fontWeight: 500, }}>
                                            Khu vực sinh sống
                                        </Typography>
                                        <Typography sx={{ px: 1 }}>
                                            {post.habitat}
                                        </Typography>
                                        <Typography sx={{ px: 1 }}>
                                            {post.living_area}
                                        </Typography>
                                    </div>
                                    <div className={classes.maintainment}>
                                        <Typography sx={{ fontWeight: 500, }}>
                                            Đặc điểm sinh thái
                                        </Typography>
                                        <Typography sx={{ px: 1 }}>
                                            {post.ecology}
                                        </Typography>
                                        <Typography sx={{ px: 1 }}>
                                            Phân bố: {post.distribution}
                                        </Typography>
                                        <Typography sx={{ px: 1 }}>
                                            Tình trạng mẫu vật: {post.status_creature}
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item lg={6} xs={12}>
                                    <div className={classes.wrapper_map}>
                                        <Map
                                            mapboxAccessToken='pk.eyJ1IjoiaG9haXRhbiIsImEiOiJjbDFrYnFndjkxcGVmM2NwMzFoMDhheDl6In0.5XVWB3EKK_7R6A5gce1tBQ'
                                            initialViewState={{
                                                longitude: post.longitude,
                                                latitude: post.latitude,
                                                center: [post.longitude, post.latitude],
                                                zoom: 10,
                                            }}
                                            style={{ width: '100%', height: 300 }}
                                            mapStyle="mapbox://styles/mapbox/streets-v11"

                                        >
                                            <Marker longitude={105.748757} latitude={9.57169}
                                                anchor="bottom" >
                                                <img src={markImg} alt='marker' style={{ width: '30px' }} />
                                            </Marker>
                                            <FullscreenControl />
                                            <Layer {...parkLayer} />
                                            {/* locate your position */}
                                            {/* <GeolocateControl /> */}

                                            {/* {showPopup && (
                                    <Popup longitude={105.748757} latitude={9.57169}
                                        anchor="bottom"
                                        onClose={() => setShowPopup(false)}>
                                        <img src={markImg} style={{width:'30px'}} />
                                    </Popup>)} */}
                                        </Map>
                                    </div>

                                </Grid>
                            </Grid>

                        </Box>
                        <div className={classes.horizon}>

                        </div>
                        <Box component='div' className={classes.interaction}>
                            <InteractionPost />
                        </Box>
                    </Container>
                </div>}
        </>


    );
};

export default PostDetail;