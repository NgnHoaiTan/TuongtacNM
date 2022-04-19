import { Button, Grid, Typography, AlertTitle, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import LableTitle from './LableTitle/LableTitle'
import Input from './Input/input'
import TextArea from './TextArea/TextArea'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { useSelector, useDispatch } from 'react-redux';
import { unwrapResult } from "@reduxjs/toolkit";
import { createAsyncPost, getListPosts } from '../../features/Slice/PostSlice';
const UploadArticleUser = () => {
    const dispatch = useDispatch();
    const posts = useSelector(getListPosts);
    const [imageErr, setImageErr] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState('');
    const [createResult, setResult] = useState(false);
    const [openToast, setOpen] = useState(false);
    const [articleValue, setArticleValue] = useState({
        title: '',
        scientific_name: '',
        vietnamese_name: '',
        region_name: '',
        kingdom: '',
        phylum: '',
        class: '',
        family: '',
        order: '',
        value_of_use: '',
        distribution: '',
        status_creature: '',
        morphology: '',
        ecology: '',
        habitat: '',
        living_area: '',
        latitude: 0,
        longitude: 0
    })

    const [baoTon, setBaoTon] = useState({
        iuc: 'không nằm trong danh mục bảo tồn',
        sachdo: 'không nằm trong danh mục bảo tồn',
        ndcp: 'không nằm trong danh mục bảo tồn',
        cites: 'không nằm trong danh mục bảo tồn',
    })

    const [images, setImages] = useState([])

    const handleCloseToast = () => {
        setOpen(false);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log(articleValue);
        console.log(baoTon);
        console.log(images);
        const formdata = new FormData();
        if (images.length > 0) {
            formdata.append('title', articleValue.title)
            formdata.append('scientific_name', articleValue.scientific_name)
            formdata.append('vietnamese_name', articleValue.vietnamese_name)
            formdata.append('region_name', articleValue.region_name)
            formdata.append('kingdom', articleValue.kingdom)
            formdata.append('phylum', articleValue.phylum)
            formdata.append('class', articleValue.class)
            formdata.append('order', articleValue.order)
            formdata.append('family', articleValue.family)
            formdata.append('distribution', articleValue.distribution)
            formdata.append('value_of_use', articleValue.value_of_use)
            formdata.append('status_creature', articleValue.status_creature)
            formdata.append('morphology', articleValue.morphology)
            formdata.append('ecology', articleValue.ecology)
            formdata.append('living_area', articleValue.living_area)
            formdata.append('latitude', articleValue.latitude)
            formdata.append('longitude', articleValue.longitude)
            formdata.append('state_of_maintainment[iuc]', baoTon.iuc)
            formdata.append('state_of_maintainment[sachdo]', baoTon.sachdo)
            formdata.append('state_of_maintainment[ndcp]', baoTon.ndcp)
            formdata.append('state_of_maintainment[cites]', baoTon.cites)
            Array.from(images).map((image, index) => {
                console.log(index);
                console.log(image);
                formdata.append('image', image)
            })

            try {
                const actionresult = await dispatch(createAsyncPost(formdata));
                const result = unwrapResult(actionresult);
                setOpen(true);
                setResult(true);
                setError(false);
            } catch (err) {
                console.log(err);
                setOpen(true);
                setError(true);
            }
        }
        else {
            setImageErr('Vui lòng chọn hình ảnh đăng kèm!');
        }
        setLoading(false);


    }

    return (
        <>
            <form style={{ margin: '30px 80px', borderBottom: '1px solid #ccc' }} onSubmit={handleSubmit} encType="multipart/form-data" >
                <Input
                    width='100%'
                    errorSubmit='Vui lòng nhập tiêu đề'
                    title='Tiêu đề bài viết'
                    handleChange={(e) => setArticleValue({ ...articleValue, title: e.target.value })}
                />
                <Input
                    width='50%'
                    errorSubmit='Vui lòng nhập tên khoa học'
                    title='Tên khoa học'
                    handleChange={(e) => setArticleValue({ ...articleValue, scientific_name: e.target.value })}
                />
                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <div style={{ width: '50%', marginRight: '10px' }}>
                        <Input
                            width='100%'
                            errorSubmit='Vui lòng nhập tên tiếng việt'
                            title='Tên tiếng việt'
                            handleChange={(e) => setArticleValue({ ...articleValue, vietnamese_name: e.target.value })}
                        />
                    </div>
                    <div style={{ width: '50%', marginLeft: '10px' }}>
                        <Input
                            width='100%'
                            errorSubmit='Vui lòng nhập tên địa phương'
                            title='Tên địa phương'
                            handleChange={(e) => setArticleValue({ ...articleValue, region_name: e.target.value })}
                        />
                    </div>
                </div>
                <div>
                    <Input
                        width='40%'
                        errorSubmit='Vui lòng nhập giới'
                        title='Giới'
                        handleChange={(e) => setArticleValue({ ...articleValue, kingdom: e.target.value })}
                    />
                    <Input
                        width='40%'
                        errorSubmit='Vui lòng nhập ngành'
                        title='Ngành'
                        handleChange={(e) => setArticleValue({ ...articleValue, phylum: e.target.value })}
                    />
                    <Input
                        width='40%'
                        errorSubmit='Vui lòng nhập lớp'
                        title='Lớp'
                        handleChange={(e) => setArticleValue({ ...articleValue, class: e.target.value })}
                    />
                    <Input
                        width='40%'
                        errorSubmit='Vui lòng nhập họ'
                        title='Họ'
                        handleChange={(e) => setArticleValue({ ...articleValue, family: e.target.value })}
                    />
                    <Input
                        width='40%'
                        errorSubmit='Vui lòng nhập bộ'
                        title='Bộ'
                        handleChange={(e) => setArticleValue({ ...articleValue, order: e.target.value })}
                    />
                    <Input
                        width='50%'
                        errorSubmit='Vui lòng nhập giá trị sử dụng'
                        title='Giá trị sử dụng'
                        handleChange={(e) => setArticleValue({ ...articleValue, value_of_use: e.target.value })}
                    />
                    <Input
                        width='50%'
                        errorSubmit='Vui lòng nhập nơi phân bố'
                        title='Phân bố'
                        handleChange={(e) => setArticleValue({ ...articleValue, distribution: e.target.value })}
                    />
                    <Input
                        width='40%'
                        errorSubmit='Vui lòng nhập tình trạng mẫu vật'
                        title='Tình trạng mẫu vật'
                        handleChange={(e) => setArticleValue({ ...articleValue, status_creature: e.target.value })}
                    />
                    <TextArea
                        row={4}
                        title='Đặc điểm hình thái'
                        errorSubmit='Vui lòng nhập đặc điểm hình thái'
                        handleChange={(e) => setArticleValue({ ...articleValue, morphology: e.target.value })}
                    />
                    <TextArea
                        row={2}
                        title='Đặc điểm sinh thái'
                        errorSubmit='Vui lòng nhập đặc điểm sinh thái'
                        handleChange={(e) => setArticleValue({ ...articleValue, ecology: e.target.value })}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <LableTitle title='Tình trạng bảo tồn' />
                    <div style={{ margin: '15px 0 0 30px' }}>
                        <Input
                            normal
                            width='50%'
                            title='Theo IUC'
                            handleChange={(e) => setBaoTon({ ...baoTon, iuc: e.target.value })}
                        />
                        <Input
                            normal
                            width='50%'
                            title='Theo Sách đỏ Việt Nam'
                            handleChange={(e) => setBaoTon({ ...baoTon, sachdo: e.target.value })}
                        />
                        <Input
                            normal
                            width='50%'
                            title='Theo nghị định 32/2006/NĐCP'
                            handleChange={(e) => setBaoTon({ ...baoTon, ndcp: e.target.value })}
                        />
                        <Input
                            normal
                            width='50%'
                            title='Theo CITES'
                            handleChange={(e) => setBaoTon({ ...baoTon, cites: e.target.value })}
                        />
                    </div>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <LableTitle title='Tọa độ sinh sống' />
                    <div style={{ margin: '15px 0 0 30px' }}>
                        <Input
                            normal
                            width='40%'
                            errorSubmit='Vui lòng nhập vĩ độ!'
                            title='Vĩ độ (Latitude)'
                            handleChange={(e) => setArticleValue({ ...articleValue, latitude: e.target.value })}
                        />
                        <Input
                            normal
                            width='40%'
                            title='Kinh độ (Longitude)'
                            errorSubmit='Vui lòng nhập kinh độ!'
                            handleChange={(e) => setArticleValue({ ...articleValue, longitude: e.target.value })}
                        />

                    </div>
                </div>
                <TextArea
                    row={2}
                    title='Sinh cảnh'
                    errorSubmit='Vui lòng nhập sinh cảnh'
                    handleChange={(e) => setArticleValue({ ...articleValue, habitat: e.target.value })}
                />
                <TextArea
                    row={2}
                    title='Địa điểm'
                    errorSubmit='Vui lòng nhập địa điểm'
                    handleChange={(e) => setArticleValue({ ...articleValue, living_area: e.target.value })}
                />

                <div style={{ margin: '20px 0' }}>
                    <LableTitle title='Ảnh đăng đính kèm' />
                    <Grid container spacing={2} style={{ padding: '0 30px', margin: '10px 0' }}>
                        {/* Xem những ảnh đã chọn */}
                        {images.length !== 0 ? Array.from(images).map((image, index) => (
                            <Grid key={index} item xs={12} lg={3}>
                                <img src={window.URL.createObjectURL(image)} width='100%' height='160px'
                                    style={{ objectFit: 'cover' }}
                                />
                            </Grid>
                        )) : <></>
                            // <Grid item xs={12} lg={3}>
                            //     <label
                            //         htmlFor="upload-imgs"
                            //         style={{ cursor: 'pointer' }}
                            //     >
                            //         <img src='https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png' width='100%' height='160px'
                            //             style={{ objectFit: 'cover' }}
                            //         />
                            //     </label>
                            // </Grid>
                        }
                        {/* Xem video đã chọn */}
                        {/* {fileVideo ?
                            <Grid item xs={12} lg={3}>
                                <video
                                    style={{
                                        height: '160px',
                                        width: '100%',
                                        objectFit: 'unset'
                                    }}
                                    type="video/mp4"
                                    src={fileVideo ? window.URL.createObjectURL(fileVideo) : ''}
                                    controls={fileVideo}
                                />
                            </Grid> :
                            <></>
                        } */}
                    </Grid>
                    {imageErr ?
                        <Typography variant='body4' sx={{ color: 'red' }}>
                            {imageErr}
                        </Typography>
                        :
                        <></>
                    }

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '30px 0 10px 0' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '50px' }}>
                                <label htmlFor="upload-imgs"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid purple',
                                        borderRadius: '5px',
                                        width: '100px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <AddPhotoAlternateIcon fontSize='large' color='secondary' />
                                </label>
                            </div>
                            {/* <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #FF6948', borderRadius: '6px' }}>
                                <label htmlFor="add-video" style={{ padding: '3px 18px', backgroundColor: '#FF6948', borderRadius: '5px', cursor: 'pointer' }}>
                                    <CameraEnhanceIcon sx={{ color: '#fff' }} />
                                </label>
                                <label
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        backgroundColor: '#fff',
                                        padding: '5px',
                                        borderRadius: '5px',
                                        cursor: 'pointer'
                                    }}
                                    htmlFor="add-video"
                                >
                                    Chọn video
                                </label>
                            </div> */}
                        </div>
                        {!loading&&<Button type='submit' variant="contained" size='large'>Đăng bài</Button>}
                        {loading&&<Button  variant="contained" size='large'>Đang khởi tạo</Button>}
                    </div>
                </div>
            </form>

            {/* input up load images */}
            <input
                required
                type='file'
                multiple
                onChange={(e) => {
                    setImages(e.target.files)
                    setImageErr('')
                }}
                id='upload-imgs'
                name='image'
                style={{ display: 'none' }}
            />
            {/* input add video
            <input
                onChange={(e) => {
                    setFileVideo(e.target.files[0])
                }}
                style={{ display: 'none' }}
                type='file' id='add-video'
            /> */}
            {createResult && !error ?
                <Box>
                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        open={openToast}
                        autoHideDuration={6000}
                        onClose={handleCloseToast}
                    >
                        <MuiAlert elevation={6} severity="success" variant="filled" >
                            <AlertTitle>Success</AlertTitle>
                            Đăng bài thành công

                        </MuiAlert>
                    </Snackbar>
                </Box> :
                <Box>
                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        open={openToast}
                        autoHideDuration={6000}
                        onClose={handleCloseToast}
                    >
                        <MuiAlert elevation={6} severity="error" variant="filled" >
                            <AlertTitle>Error</AlertTitle>
                            Đăng bài thất bại, hãy thử lại
                        </MuiAlert>
                    </Snackbar>
                </Box>}
        </>
    )
}

export default UploadArticleUser