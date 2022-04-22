import { Avatar, IconButton, AlertTitle, Box, Typography, Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Infor from './Infor/Infor';
import { useEffect, useState } from 'react';
import CheckGenre from './Infor/CheckGenre';
import TextAreaInput from './Infor/TextArea';
import PickDate from './Infor/PickDate';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { unwrapResult } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { AsyncUpdateUser, fetchAsyncUserById } from '../../features/Slice/UserSlice';

const InforPersonalUser = ({ user }) => {
    const [errImg, setErrImg] = useState(false);
    const [errUpdate,setErrUpdate] = useState('');
    const [openToast, setOpen] = useState(false);
    const [image, setImage] = useState({});
    const [previewImg, setPreviewImg] = useState();
    const [resultUpdate, setResultUpdate] = useState(false);
    const dispatch = useDispatch();
    const [info, setInfo] = useState({
        name: user.name,
        email: user.email ? user.email : '',
        phone_number: user.phone_number,
        gender: user.gender ? user.gender : false,
        address: user.address ? user.address : '',
        education: user.education ? user.education : '',
        introduction: user.introduction ? user.introduction : '',
        birthday: user.birthday ? user.birthday : new Date(),
        image: user.image ? user.image : ''
    })
    const handleUpload = (e) => {
        setErrImg(false);
        console.log(e.target.files[0]);
        const filesFormats = ["image/jpeg", "image/png"]
        const newfile = e.target.files[0];
        if (newfile) {
            if (filesFormats.includes(newfile.type)) {
                setImage(newfile)
                setInfo((prev) => {
                    return {
                        ...prev,
                        image: newfile
                    }
                })
                const objectURL = URL.createObjectURL(newfile);
                setPreviewImg(objectURL);
                // free memory when ever this component is unmounted
                return () => URL.revokeObjectURL(objectURL);
            }
            else {
                setOpen(true);
                setErrImg(true);
                console.log('loi img')
            }

        }


    }
    
    const handleCloseToast = () => {
        setOpen(false);
    }
    const handleUpdate = async() => {
        console.log('update');
        setOpen(false);
        setResultUpdate(false);
        const formdata = new FormData();
        info.name && formdata.append('name',info.name);  
        info.image && formdata.append('image',info.image); 
        info.phone_number && formdata.append('phone_number',info.phone_number); 
        info.gender && formdata.append('gender',info.gender); 
        info.address && formdata.append('address',info.address);                                           
        info.education && formdata.append('education',info.education); 
        info.introduction && formdata.append('introduction',info.introduction); 
        info.birthday && formdata.append('birthday',info.birthday); 
        info.email && formdata.append('email',info.email);
        let userId = user._id;
        
        const data ={
            formdata,
            userId,
        }
        
        try{
            let action = await dispatch(AsyncUpdateUser(data))
            dispatch(fetchAsyncUserById(userId))
            let result = unwrapResult(action);
            setResultUpdate(true);
            setOpen(true);
        }catch(err){
            console.log(err);
            setResultUpdate(false);
            setOpen(true);
            setErrUpdate(err.message)
        }
    }
    console.log(user)
    return (
        <div style={{ width: '60%', minHeight: '200px', margin: '20px auto 30px auto', padding: '0 10px 20px', backgroundColor: '#E9E9E9', borderRadius: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0' }}>
                <div style={{ position: 'relative' }}>
                    <div>
                        <Avatar
                            src={previewImg ? previewImg : user.image}
                            sx={{
                                width: '150px',
                                height: '150px'
                            }}
                        />
                    </div>
                    <div style={{ position: 'absolute', bottom: '0', right: '0', backgroundColor: '#fff', borderRadius: '50%' }}>
                        <label htmlFor="image">
                            <IconButton size='small' color="primary" component="span">
                                <EditIcon />
                            </IconButton>
                        </label>
                        <input
                            onChange={(e) => {
                                handleUpload(e)
                            }}
                            style={{ display: 'none' }}
                            type='file' id='image'
                        />

                    </div>
                </div>
            </div>
            <div style={{ paddingBottom: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Infor title='Họ tên:' content={info.name} setInfo={setInfo} name='name' />
                    <Infor title='Email:' content={info.email} setInfo={setInfo} name='email' />
                    <Infor title='Phone:' content={info.phone_number} setInfo={setInfo} name='phone_number' />
                    <CheckGenre title='Giới tính' content={info.gender} setInfo={setInfo} name='gender' />
                    <Infor title='Địa chỉ:' content={info.address} setInfo={setInfo} name='address' />
                    <Infor title='Học vấn:' content={info.education} setInfo={setInfo} name='education' />
                    <TextAreaInput title='Giới thiệu:' content={info.introduction} setInfo={setInfo} name='introduction' />
                    <PickDate title='Ngày sinh:' content={info.birthday} setInfo={setInfo} name='birthday' />
                </div>

            </div>
            <div style={{display:'flex',justifyContent:'flex-end'}}>
                <Button variant='contained' onClick={handleUpdate} sx={{mr:10}}>
                    Cập nhật
                </Button>
            </div>


            {/* <Box>
               <Snackbar
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  open={openToast}
                  autoHideDuration={6000}
                  onClose={handleCloseToast}
               >
                  <MuiAlert elevation={6} severity="success" variant="filled" >
                     <AlertTitle>Success</AlertTitle>
                     You created successfully.
                     <Button onClick={history.goBack} size='small' variant='text' sx={{ color: 'white' }}>
                        Let's check !
                     </Button>
                  </MuiAlert>
               </Snackbar>
            </Box> */}
            {errImg &&
                <Box>
                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        open={openToast}
                        autoHideDuration={2000}
                        onClose={handleCloseToast}
                    >
                        <MuiAlert elevation={6} severity="error" variant="filled" >
                            <AlertTitle>Lỗi</AlertTitle>
                            Vui lòng chọn đúng định dạng ảnh
                        </MuiAlert>
                    </Snackbar>
                </Box>
            }
            {resultUpdate &&
                <Box>
                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        open={openToast}
                        autoHideDuration={2000}
                        onClose={handleCloseToast}
                    >
                        <MuiAlert elevation={6} severity="success" variant="filled" >
                            <AlertTitle>Thành công</AlertTitle>
                            Cập nhật thông tin thành công
                        </MuiAlert>
                    </Snackbar>
                </Box>
            }
            {errUpdate &&
                <Box>
                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        open={openToast}
                        autoHideDuration={2000}
                        onClose={handleCloseToast}
                    >
                        <MuiAlert elevation={6} severity="error" variant="filled" >
                            <AlertTitle>Lỗi</AlertTitle>
                            {errUpdate}
                        </MuiAlert>
                    </Snackbar>
                </Box>
            }

        </div>
    )
}

export default InforPersonalUser