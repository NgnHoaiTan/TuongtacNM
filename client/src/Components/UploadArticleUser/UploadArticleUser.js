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
const UploadArticleUser = ({ user }) => {
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
        iuc: '',
        sachdo: '',
        ndcp: '',
        cites: '',
    })

    const [images, setImages] = useState([])

    const handleCloseToast = () => {
        setOpen(false);
    }
    const refreshStatePost = () => {
        setArticleValue(() => ({
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
        }));
        setBaoTon(() => ({
            iuc: '',
            sachdo: '',
            ndcp: '',
            cites: '',
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
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
            formdata.append('user', user._id)
            try {
                const actionresult = await dispatch(createAsyncPost(formdata));
                const result = unwrapResult(actionresult);
                setOpen(true);
                setResult(true);
                setError(false);
                setTimeout(()=>{
                    window.location.reload();
                },2500)
            } catch (err) {
                console.log(err);
                setOpen(true);
                setError(true);
            }
        }
        else {
            setImageErr('Vui l??ng ch???n h??nh ???nh ????ng k??m!');
        }
        setLoading(false);


    }
    
    return (
        <>
            <form style={{ margin: '30px 80px', borderBottom: '1px solid #ccc' }} onSubmit={handleSubmit} encType="multipart/form-data" >
                <Input
                    width='100%'
                    errorSubmit='Vui l??ng nh???p ti??u ?????'
                    title='Ti??u ????? b??i vi???t'
                    value={articleValue.title}
                    handleChange={(e) => setArticleValue({ ...articleValue, title: e.target.value })}
                />
                <Input
                    width='50%'
                    errorSubmit='Vui l??ng nh???p t??n khoa h???c'
                    title='T??n khoa h???c'
                    value={articleValue.scientific_name}
                    handleChange={(e) => setArticleValue({ ...articleValue, scientific_name: e.target.value })}
                />
                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <div style={{ width: '50%', marginRight: '10px' }}>
                        <Input
                            width='100%'
                            errorSubmit='Vui l??ng nh???p t??n ti???ng vi???t'
                            title='T??n ti???ng vi???t'
                            value={articleValue.vietnamese_name}
                            handleChange={(e) => setArticleValue({ ...articleValue, vietnamese_name: e.target.value })}
                        />
                    </div>
                    <div style={{ width: '50%', marginLeft: '10px' }}>
                        <Input
                            width='100%'
                            errorSubmit='Vui l??ng nh???p t??n ?????a ph????ng'
                            title='T??n ?????a ph????ng'
                            value={articleValue.region_name}
                            handleChange={(e) => setArticleValue({ ...articleValue, region_name: e.target.value })}
                        />
                    </div>
                </div>
                <div>
                    <Input
                        width='40%'
                        errorSubmit='Vui l??ng nh???p gi???i'
                        title='Gi???i'
                        value={articleValue.kingdom}
                        handleChange={(e) => setArticleValue({ ...articleValue, kingdom: e.target.value })}
                    />
                    <Input
                        width='40%'
                        errorSubmit='Vui l??ng nh???p ng??nh'
                        title='Ng??nh'
                        value={articleValue.phylum}
                        handleChange={(e) => setArticleValue({ ...articleValue, phylum: e.target.value })}
                    />
                    <Input
                        width='40%'
                        errorSubmit='Vui l??ng nh???p l???p'
                        title='L???p'
                        value={articleValue.class}
                        handleChange={(e) => setArticleValue({ ...articleValue, class: e.target.value })}
                    />
                    <Input
                        width='40%'
                        errorSubmit='Vui l??ng nh???p h???'
                        title='H???'
                        value={articleValue.family}
                        handleChange={(e) => setArticleValue({ ...articleValue, family: e.target.value })}
                    />
                    <Input
                        width='40%'
                        errorSubmit='Vui l??ng nh???p b???'
                        title='B???'
                        value={articleValue.order}
                        handleChange={(e) => setArticleValue({ ...articleValue, order: e.target.value })}
                    />
                    <Input
                        width='50%'
                        errorSubmit='Vui l??ng nh???p gi?? tr??? s??? d???ng'
                        title='Gi?? tr??? s??? d???ng'
                        value={articleValue.value_of_use}
                        handleChange={(e) => setArticleValue({ ...articleValue, value_of_use: e.target.value })}
                    />
                    <Input
                        width='50%'
                        errorSubmit='Vui l??ng nh???p n??i ph??n b???'
                        title='Ph??n b???'
                        value={articleValue.distribution}
                        handleChange={(e) => setArticleValue({ ...articleValue, distribution: e.target.value })}
                    />
                    <Input
                        width='40%'
                        errorSubmit='Vui l??ng nh???p t??nh tr???ng m???u v???t'
                        title='T??nh tr???ng m???u v???t'
                        value={articleValue.status_creature}
                        handleChange={(e) => setArticleValue({ ...articleValue, status_creature: e.target.value })}
                    />
                    <TextArea
                        row={4}
                        title='?????c ??i???m h??nh th??i'
                        errorSubmit='Vui l??ng nh???p ?????c ??i???m h??nh th??i'
                        value={articleValue.morphology}
                        handleChange={(e) => setArticleValue({ ...articleValue, morphology: e.target.value })}
                    />
                    <TextArea
                        row={2}
                        title='?????c ??i???m sinh th??i'
                        errorSubmit='Vui l??ng nh???p ?????c ??i???m sinh th??i'
                        value={articleValue.ecology}
                        handleChange={(e) => setArticleValue({ ...articleValue, ecology: e.target.value })}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <LableTitle title='T??nh tr???ng b???o t???n' />
                    <div style={{ margin: '15px 0 0 30px' }}>
                        <Input
                            normal
                            width='50%'
                            title='Theo IUC'
                            value={baoTon.iuc}
                            handleChange={(e) => setBaoTon({ ...baoTon, iuc: e.target.value })}
                        />
                        <Input
                            normal
                            width='50%'
                            value={baoTon.sachdo}
                            title='Theo S??ch ????? Vi???t Nam'
                            handleChange={(e) => setBaoTon({ ...baoTon, sachdo: e.target.value })}
                        />
                        <Input
                            normal
                            width='50%'
                            value={baoTon.ndcp}
                            title='Theo ngh??? ?????nh 32/2006/N??CP'
                            handleChange={(e) => setBaoTon({ ...baoTon, ndcp: e.target.value })}
                        />
                        <Input
                            normal
                            width='50%'
                            title='Theo CITES'
                            value={baoTon.cites}
                            handleChange={(e) => setBaoTon({ ...baoTon, cites: e.target.value })}
                        />
                    </div>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <LableTitle title='T???a ????? sinh s???ng' />
                    <div style={{ margin: '15px 0 0 30px' }}>
                        <Input
                            normal
                            width='40%'
                            errorSubmit='Vui l??ng nh???p v?? ?????!'
                            value={articleValue.latitude}
                            title='V?? ????? (Latitude)'
                            handleChange={(e) => setArticleValue({ ...articleValue, latitude: e.target.value })}
                        />
                        <Input
                            normal
                            width='40%'
                            title='Kinh ????? (Longitude)'
                            errorSubmit='Vui l??ng nh???p kinh ?????!'
                            value={articleValue.longitude}
                            handleChange={(e) => setArticleValue({ ...articleValue, longitude: e.target.value })}
                        />

                    </div>
                </div>
                <TextArea
                    row={2}
                    title='Sinh c???nh'
                    value={articleValue.habitat}
                    errorSubmit='Vui l??ng nh???p sinh c???nh'
                    handleChange={(e) => setArticleValue({ ...articleValue, habitat: e.target.value })}
                />
                <TextArea
                    row={2}
                    title='?????a ??i???m'
                    value={articleValue.living_area}
                    errorSubmit='Vui l??ng nh???p ?????a ??i???m'
                    handleChange={(e) => setArticleValue({ ...articleValue, living_area: e.target.value })}
                />

                <div style={{ margin: '20px 0' }}>
                    <LableTitle title='???nh ????ng ????nh k??m' />
                    <Grid container spacing={2} style={{ padding: '0 30px', margin: '10px 0' }}>
                        {/* Xem nh???ng ???nh ???? ch???n */}
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
                        {/* Xem video ???? ch???n */}
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
                                    Ch???n video
                                </label>
                            </div> */}
                        </div>
                        {!loading && <Button type='submit' variant="contained" size='large'>????ng b??i</Button>}
                        {loading && <Button variant="contained" size='large'>??ang kh???i t???o</Button>}
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
                        autoHideDuration={2000}
                        onClose={handleCloseToast}
                    >
                        <MuiAlert elevation={6} severity="success" variant="filled" >
                            <AlertTitle>Success</AlertTitle>
                            ????ng b??i th??nh c??ng

                        </MuiAlert>
                    </Snackbar>
                </Box> :
                <Box>
                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        open={openToast}
                        autoHideDuration={2000}
                        onClose={handleCloseToast}
                    >
                        <MuiAlert elevation={6} severity="error" variant="filled" >
                            <AlertTitle>Error</AlertTitle>
                            ????ng b??i th???t b???i, h??y th??? l???i
                        </MuiAlert>
                    </Snackbar>
                </Box>}
        </>
    )
}

export default UploadArticleUser