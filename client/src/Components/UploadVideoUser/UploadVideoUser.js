import { Button, Paper, TextField, IconButton, Typography,Box,AlertTitle } from '@mui/material'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAsyncVideo } from '../../features/Slice/VideoSlice'
import { unwrapResult } from '@reduxjs/toolkit';
const UploadVideoUser = ({user}) => {
    const dispatch = useDispatch();
    const [fileVideo, setFileVideo] = useState('')
    const [description, setDescription] = useState('')
    const [videoErr, setVideoErr] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState('');
    const [createResult, setResult] = useState(false);
    const [openToast, setOpen] = useState(false);
    const [reviewVid, setReviewVid] = useState()
    const handleCloseToast = () => {
        setOpen(false);
    }
    
    const handleUploadFile=(e)=>{
        let file = e.target.files[0];
        const filesFormats = ["video/mp4"];
        if (file) {
            if (filesFormats.includes(file.type)) {
                setFileVideo(file)
                const objectURL = URL.createObjectURL(file);
                setReviewVid(objectURL);
                // free memory when ever this component is unmounted
                return () => URL.revokeObjectURL(objectURL);
            }
            else{
                setVideoErr('Chỉ hỗ trợ định dạng video/mp4');
                
            }
         }
    }
    const handleSubmit = async () => {
        console.log(fileVideo);
        console.log(description);
        setLoading(true);
        if (fileVideo) {
            const formdata = new FormData();
            formdata.append('title', description);
            formdata.append('video', fileVideo);
            formdata.append('user',user._id)
            try {
                const actionresult = await dispatch(createAsyncVideo(formdata));
                const result = unwrapResult(actionresult);
                setOpen(true);
                setResult(true);
                setError(false);
                setFileVideo('');
                setReviewVid('')
                setDescription('');
            } catch (err) {
                console.log(err);
                setOpen(true);
                setError(true);
            }
        }
        else {
            setVideoErr('Vui lòng chọn video đăng kèm!');
        }
        setLoading(false);
    }
    return (
        <>
            <Paper style={{ backgroundColor: '#E0E3E3', minHeight: '300px', width: '80%', margin: '20px auto' }}>
                <div style={{ padding: '20px' }}>
                    <TextField
                        sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
                        label="Mô tả video của bạn"
                        multiline
                        fullWidth
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                {videoErr ?
                    <Typography variant='body4' sx={{ color: 'red', ml: 3 }}>
                        {videoErr}
                    </Typography>
                    :
                    <></>
                }
                <div style={{ position: 'relative', height: '200px', width: '300px', marginLeft: '20px' }}>
                    <video
                        style={{
                            height: '100%',
                            width: '100%',
                            borderRadius: '5px',
                            objectFit: 'unset'
                        }}
                        type="video/mp4"
                        src={reviewVid}
                        controls={fileVideo}
                    />

                    <IconButton
                        style={{
                            position: 'absolute',
                            top: '0',
                            right: '0',
                            display: fileVideo ? 'block' : 'none',
                        }}
                        color="error"
                        component="span"
                        onClick={() => setFileVideo('')}
                    >
                        <HighlightOffIcon />
                    </IconButton>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>

                        <label htmlFor="video" style={{ padding: '2px 18px', backgroundColor: '#FF6948', borderRadius: '5px', cursor: 'pointer' }}>
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
                            htmlFor="video"
                        >
                            Chọn video
                        </label>
                        <input
                            id='video'
                            onChange={(e) => {
                                handleUploadFile(e)
                            }}
                            style={{ display: 'none' }}
                            type='file'
                        />
                    </div>
                    <div>
                        {!loading && <Button onClick={handleSubmit} size='small' variant="contained">Đăng bài</Button>}
                        {loading && <Button variant="contained" size='small'>Đang khởi tạo</Button>}
                    </div>
                </div>
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
                                Đăng video thành công

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
                                Đăng video thất bại, hãy thử lại
                            </MuiAlert>
                        </Snackbar>
                    </Box>}
            </Paper>

        </>
    )
}

export default UploadVideoUser