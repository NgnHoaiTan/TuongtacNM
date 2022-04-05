import { Avatar, Box, Container, Grid, Typography, Table, TableHead, TableBody, TableRow, Paper, Button, InputBase, TextField, List, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled, alpha } from '@mui/material/styles';
import React from 'react';
import { makeStyles } from '@mui/styles';
import userdemo from '../../Images/user5.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import animalDemo1 from '../../Images/echgiunnguyen.JPG';
import animalDemo2 from '../../Images/echgiunnguyen2.JPG';
import animalDemo3 from '../../Images/echgiunnguyen3.JPG';
import animalDemo5 from '../../Images/echgiunnguyen5.JPG';
import markImg from '../../Images/gps.png';
import Map, { Marker, FullscreenControl, Layer } from 'react-map-gl';
import { createTheme } from '@mui/material/styles';
import Interaction from '../../Components/Interaction/Interaction';
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
    comment:{
        height:'300px',
        overflow:'auto'
    }
})

const rows = [
    {
        name: 'IUC',
        value: 'LC (Least concern)'
    },
    {
        name: 'SDVN',
        value: 'Sắp nguy cấp'
    },
    {
        name: 'NDCP',
        value: 'Không nằm trong danh mục bảo tồn'
    },
    {
        name: 'CITES',
        value: 'Không nằm trong danh mục bảo tồn'
    },
];
const PostDetail = () => {
    const classes = useStyle();
    //const [showPopup, setShowPopup] = React.useState(true);
    return (
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
                            04/04/2022
                        </Typography>
                    </div>
                </Box>
                <Box component='div' className={classes.postinfo}>
                    <Typography className='title_of_post' sx={{ fontWeight: 500, fontSize: '18px', my: 1 }}>
                        Loài ếch giun nguyễn và các khám phá về chúng
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item md={5} xs={12}>
                            <Carousel infiniteLoop>
                                <div>
                                    <img src={animalDemo1} />
                                </div>
                                <div>
                                    <img src={animalDemo2} />
                                </div>
                                <div>
                                    <img src={animalDemo3} />
                                </div>
                                <div>
                                    <img src={animalDemo5} />
                                </div>
                                <div>
                                    <img src={animalDemo5} />
                                </div>
                            </Carousel>
                        </Grid>
                        <Grid item md={7} xs={12} className={classes.general_info}>
                            <Box component='div'>
                                <Typography sx={{ fontWeight: 400, mb: 0.5 }}>
                                    <span className={classes.span_title}>Tên khoa học:</span> Ichthyophis nguyenorum Nishikawa, Matsui, and Orlov, 2012
                                </Typography>
                                <Typography sx={{ fontWeight: 400, mb: 0.5 }}>
                                    <span className={classes.span_title}>Tên địa phương:</span> Rắn trun đĩa
                                </Typography>
                                <Typography sx={{ fontWeight: 400, mb: 0.5 }}>
                                    <span className={classes.span_title}>Tên tiếng việt:</span> Rắn giun nguyễn
                                </Typography>
                                <Typography sx={{ fontWeight: 400, mb: 0.5 }}>
                                    <span className={classes.span_title}>Giới:</span> Động vật (Animalia)
                                </Typography>
                                <Typography sx={{ fontWeight: 400, mb: 0.5 }}>
                                    <span className={classes.span_title}>Ngành:</span> Động vật có dây sống (Chordata)
                                </Typography>
                                <Typography sx={{ fontWeight: 400, mb: 0.5 }}>
                                    <span className={classes.span_title}>Lớp:</span> AMPHIBIA
                                </Typography>
                                <Typography sx={{ fontWeight: 400, mb: 0.5 }}>
                                    <span className={classes.span_title}>Bộ:</span> GYMNOPHIONA
                                </Typography>
                                <Typography sx={{ fontWeight: 400, mb: 0.5 }}>
                                    <span className={classes.span_title}>Họ:</span> Ichthyophidae Taylor, 1968
                                </Typography>
                                <Typography sx={{ fontWeight: 400, mb: 0.5 }}>
                                    <span className={classes.span_title}>Giá trị sử dụng:</span> Chưa xác định
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <div className={classes.morphology}>
                        <Typography sx={{ fontWeight: 500, }}>
                            Đặc điểm hình thái
                        </Typography>
                        <Typography sx={{ px: 1 }}>
                            Đặc điểm chẩn loại: cơ thể tròn, dẹt mặt bụng; chóp đuôi cùn, không có dạng mũ; không có đốm màu vàng mặt bụng; đầu rộng nhất ở góc mép miệng, hẹp dần về trước; mút mõm tròn; lỗ mũi nằm gần bờ trước mép miệng; số vòng quanh thân: 312 – 318; sọc vàng rộng chạy liên tục từ sau mắt đến huyệt (Nishikawa et al.,2012).
                            Đặc điểm hình thái: SVL 201,3 mm. Dài đuôi: 2,6 – 3,5; rộng đuôi: 2,8 – 3,5. Rộng đầu (HW: 6,6). Dài đầu hơn rộng đầu (HL/HW: 1,25-1,47). Cơ thể hơi tròn, dài, dạng rắn. Đầu dẹp, láng; rộng nhất ở mép miệng, hẹo về phía đầu. Mút mõm tròn; dài mõm bằng với ngang đầu ở vị trí mắt. Mắt nhỏ, không mi mắt, có một đôi râu (tentacle) ngắn nằm phía trước mắt. Hai bên thân có sọc  màu vàng bắt đầu từ sau mép miệng đến lỗ huyệt. Số nếp gấp quanh thân: 280 – 300; ở đuôi: 7-8. Đuôi ngắn hơi dẹt ở mặt bụng, phần đỉnh cùn, không có đốm màu cam hay vàng  ở mặt bụng. Mặt lưng có màu tím đen, bụng màu hoa cà nhạt, hai bên sườn có sọc màu vàng liên tục, không đứt quãng, chạy từ khoảng giữa hàm trên (mấu xúc - tu) đến gần mút đuôi. Mắt có viền mỏng màu trắng đục.
                            Ghi chú:  Loài Ichthyophis bannanicus phân biệt với Ichthyophis nguyenorum dựa trên các đặc điểm: số nếp vòng quanh cơ thể của I. nguyenorum (312 – 318) ít hơn so với I. bannanicus (340); sọc bên thân của I. nguyenorum kéo dài đến mút đuôi so với sọc bị đứt quãng ở phía sau đuôi của I. bannanicus Nishikawa et al. (2012).
                        </Typography>
                    </div>
                    <div className={classes.maintainment}>
                        <Typography sx={{ fontWeight: 500, }}>
                            Tình trạng bảo tồn
                        </Typography>
                        <Grid item xs={12}>
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
                                            {rows.map((row) => (
                                                <TableCell key={row.name} sx={{
                                                    fontWeight: 500,
                                                    [theme.breakpoints.down(400)]: {
                                                        padding: '5px'

                                                    },
                                                }} >
                                                    {row.value}
                                                    {console.log(row.name)}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableBody>

                                </Table>
                            </Box>
                        </Grid>

                    </div>


                    <Grid container>
                        <Grid item lg={6} xs={12}>
                            <div className={classes.maintainment}>
                                <Typography sx={{ fontWeight: 500, }}>
                                    Khu vực sinh sống
                                </Typography>
                                <Typography sx={{ px: 1 }}>
                                    Sinh cảnh: Rừng tràm đặc dụng,  rừng tràm trồng
                                </Typography>
                                <Typography sx={{ px: 1 }}>
                                    Địa điểm: Rừng Tràm Mỹ Phước, Mỹ Phước, Mỹ Tú, Sóc Trăng.
                                </Typography>
                            </div>
                            <div className={classes.maintainment}>
                                <Typography sx={{ fontWeight: 500, }}>
                                    Đặc điểm sinh thái
                                </Typography>
                                <Typography sx={{ px: 1 }}>
                                    Sống ở các vực nước (ao, vũng...) có nhiều bùn và lá mục,
                                    hay các khu vực đất nông nghiệp. Thức ăn gồm côn trùng, giun đất,
                                    nhện và những loài không xương sống nhỏ khác.
                                </Typography>
                                <Typography sx={{ px: 1 }}>
                                    Phân bố phổ biến
                                </Typography>
                                <Typography sx={{ px: 1 }}>
                                    Tình trạng mẫu vật: Thu được mẫu
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <div className={classes.wrapper_map}>
                                <Map
                                    mapboxAccessToken='pk.eyJ1IjoiaG9haXRhbiIsImEiOiJjbDFrYnFndjkxcGVmM2NwMzFoMDhheDl6In0.5XVWB3EKK_7R6A5gce1tBQ'
                                    initialViewState={{
                                        longitude: 105.748757,
                                        latitude: 9.57169,
                                        center: [105.748757, 9.57169],
                                        zoom: 10,
                                    }}
                                    style={{ width: '100%', height: 300 }}
                                    mapStyle="mapbox://styles/mapbox/streets-v11"

                                >
                                    <Marker longitude={105.748757} latitude={9.57169}
                                        anchor="bottom" >
                                        <img src={markImg} style={{ width: '30px' }} />
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
                    <Interaction />
                </Box>
            </Container>
        </div>

    );
};

export default PostDetail;