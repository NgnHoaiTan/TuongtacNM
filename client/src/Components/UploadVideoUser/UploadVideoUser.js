import { Button, Paper, TextField, IconButton } from '@mui/material'
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from 'react';

const UploadVideoUser = () => {

    const [fileVideo, setFileVideo] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = () => {
        console.log(fileVideo);
        console.log(description);
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
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div style={{ position: 'relative', height: '200px', width: '300px', marginLeft: '20px' }}>
                    <video
                        style={{
                            height: '100%',
                            width: '100%',
                            borderRadius: '5px',
                            objectFit: 'unset'
                        }}
                        type="video/mp4"
                        src={fileVideo ? window.URL.createObjectURL(fileVideo) : ''}
                        controls={fileVideo}
                    />
                    <IconButton 
                        style={{ 
                            position: 'absolute' , 
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
                        <label htmlFor="upload-video" style={{ padding: '2px 18px', backgroundColor: '#FF6948', borderRadius: '5px', cursor: 'pointer' }}>
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
                            htmlFor="upload-video"
                        >
                            Chọn video
                        </label>
                        <input 
                            onChange={(e) => {
                                setFileVideo(e.target.files[0])
                            }} 
                            style={{ display: 'none' }} 
                            type='file' id='upload-video' 
                        />
                    </div>
                    <div>
                        <Button onClick={handleSubmit} size='small' variant="contained">Đăng bài</Button>
                    </div>
                </div>
            </Paper>
        </>
    )
}

export default UploadVideoUser