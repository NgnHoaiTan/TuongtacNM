import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import LableTitle from './LableTitle/LableTitle'
import Input from './Input/input'
import TextArea from './TextArea/TextArea'

const UploadArticleUser = () => {

    const [articleValue, setArticleValue] = useState({
        tieude: '',
        tenkhoahoc: '',
        tentiengviet: '',
        tendiaphuong: '',
        gioi: '',
        nganh: '',
        lop: '',
        ho: '',
        bo: '',
        giatrisudung: '',
        phanbo: '',
        tinhtrangmauvat: '',
        datdiemhinhthai: '',
        datdiemsinhthai: '',
        sinhcanh: '',
        diadiem: ''
    })

    const [baoTon, setBaoTon] = useState({
        iuc: 'không nằm trong danh mục bảo tồn',
        sachdo: 'không nằm trong danh mục bảo tồn',
        ndcp: 'không nằm trong danh mục bảo tồn',
        cites: 'không nằm trong danh mục bảo tồn',
    })

    const [toaDo, setToaDo] = useState({
        td1: '',
        td2: '',
        td3: '',
        td4: '',
        td5: ''
    })

    const [images, setImages] = useState([])
    const [fileVideo, setFileVideo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(articleValue);
        console.log(baoTon);
        console.log(toaDo);
    }

    return (
        <>
            <form style={{ margin: '30px 80px', borderBottom: '1px solid #ccc' }} onSubmit={handleSubmit}>
                <Input
                    width='100%'
                    errorSubmit='Vui lòng nhập tiêu đề'
                    title='Tiêu đề bài viết'
                    handleChange={(e) => setArticleValue({ ...articleValue, tieude: e.target.value })}
                />
                <Input
                    width='50%'
                    errorSubmit='Vui lòng nhập tên khoa học'
                    title='Tên khoa học'
                    handleChange={(e) => setArticleValue({ ...articleValue, tenkhoahoc: e.target.value })}
                />
                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                    <div style={{ width: '50%', marginRight: '10px' }}>
                        <Input
                            width='100%'
                            errorSubmit='Vui lòng nhập tên tiếng việt'
                            title='Tên tiếng việt'
                            handleChange={(e) => setArticleValue({ ...articleValue, tentiengviet: e.target.value })}
                        />
                    </div>
                    <div style={{ width: '50%', marginLeft: '10px' }}>
                        <Input
                            width='100%'
                            errorSubmit='Vui lòng nhập tên địa phương'
                            title='Tên địa phương'
                            handleChange={(e) => setArticleValue({ ...articleValue, tendiaphuong: e.target.value })}
                        />
                    </div>
                </div>
                <div>
                    <Input
                        width='40%'
                        errorSubmit='Vui lòng nhập giới'
                        title='Giới'
                        handleChange={(e) => setArticleValue({ ...articleValue, gioi: e.target.value })}
                    />
                    <Input
                        width='40%'
                        errorSubmit='Vui lòng nhập ngành'
                        title='Ngành'
                        handleChange={(e) => setArticleValue({ ...articleValue, nganh: e.target.value })}
                    />
                    <Input
                        width='40%'
                        errorSubmit='Vui lòng nhập lớp'
                        title='Lớp'
                        handleChange={(e) => setArticleValue({ ...articleValue, lop: e.target.value })}
                    />
                    <Input
                        width='40%'
                        errorSubmit='Vui lòng nhập họ'
                        title='Họ'
                        handleChange={(e) => setArticleValue({ ...articleValue, ho: e.target.value })}
                    />
                    <Input
                        width='40%'
                        errorSubmit='Vui lòng nhập bộ'
                        title='Bộ'
                        handleChange={(e) => setArticleValue({ ...articleValue, bo: e.target.value })}
                    />
                    <Input
                        width='50%'
                        errorSubmit='Vui lòng nhập giá trị sử dụng'
                        title='Giá trị sử dụng'
                        handleChange={(e) => setArticleValue({ ...articleValue, giatrisudung: e.target.value })}
                    />
                    <Input
                        width='50%'
                        errorSubmit='Vui lòng nhập nơi phân bố'
                        title='Phân bố'
                        handleChange={(e) => setArticleValue({ ...articleValue, phanbo: e.target.value })}
                    />
                    <Input
                        width='40%'
                        errorSubmit='Vui lòng nhập tình trạng mẫu vật'
                        title='Tình trạng mẫu vật'
                        handleChange={(e) => setArticleValue({ ...articleValue, tinhtrangmauvat: e.target.value })}
                    />
                    <TextArea
                        row={4}
                        title='Đặc điểm hình thái'
                        errorSubmit='Vui lòng nhập đặc điểm hình thái'
                        handleChange={(e) => setArticleValue({ ...articleValue, datdiemhinhthai: e.target.value })}
                    />
                    <TextArea
                        row={2}
                        title='Đặc điểm sinh thái'
                        errorSubmit='Vui lòng nhập đặc điểm sinh thái'
                        handleChange={(e) => setArticleValue({ ...articleValue, datdiemsinhthai: e.target.value })}
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
                            errorSubmit='Vui lòng nhập ít nhất 1 tọa độ ở đây!'
                            title='Tọa độ 1'
                            handleChange={(e) => setToaDo({ ...toaDo, td1: e.target.value })}
                        />
                        <Input
                            normal
                            width='40%'
                            title='Tọa độ 2'
                            handleChange={(e) => setToaDo({ ...toaDo, td2: e.target.value })}
                        />
                        <Input
                            normal
                            width='40%'
                            title='Tọa độ 3'
                            handleChange={(e) => setToaDo({ ...toaDo, td3: e.target.value })}
                        />
                        <Input
                            normal
                            width='40%'
                            title='Tọa độ 4'
                            handleChange={(e) => setToaDo({ ...toaDo, td4: e.target.value })}
                        />
                        <Input
                            normal
                            width='40%'
                            title='Tọa độ 5'
                            handleChange={(e) => setToaDo({ ...toaDo, td5: e.target.value })}
                        />
                    </div>
                </div>
                <TextArea
                    row={2}
                    title='Sinh cảnh'
                    errorSubmit='Vui lòng nhập sinh cảnh'
                    handleChange={(e) => setArticleValue({ ...articleValue, sinhcanh: e.target.value })}
                />
                <TextArea
                    row={2}
                    title='Địa điểm'
                    errorSubmit='Vui lòng nhập địa điểm'
                    handleChange={(e) => setArticleValue({ ...articleValue, diadiem: e.target.value })}
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
                        )) :
                            <Grid item xs={12} lg={3}>
                                <label
                                    htmlFor="upload-imgs"
                                    style={{ cursor: 'pointer' }}
                                >
                                    <img src='https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png' width='100%' height='160px'
                                        style={{ objectFit: 'cover' }}
                                    />
                                </label>
                            </Grid>
                        }
                        {/* Xem video đã chọn */}
                        {fileVideo ?
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
                        }
                    </Grid>
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
                            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #FF6948', borderRadius: '6px' }}>
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
                            </div>
                        </div>
                        <Button type='submit' variant="contained" size='large'>Đăng bài</Button>
                    </div>
                </div>
            </form>

            {/* input up load images */}
            <input
                type='file'
                multiple
                onChange={(e) => {
                    setImages(e.target.files)
                }}
                id='upload-imgs'
                style={{ display: 'none' }}
            />
            {/* input add video */}
            <input
                onChange={(e) => {
                    setFileVideo(e.target.files[0])
                }}
                style={{ display: 'none' }}
                type='file' id='add-video'
            />
        </>
    )
}

export default UploadArticleUser