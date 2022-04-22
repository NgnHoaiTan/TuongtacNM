import { InputBase, Typography } from '@mui/material'
import React from 'react'

const TextAreaInput = ({ title, content,setInfo,name }) => {
    const handleInput =async(e)=>{
        let field = e.target.id;
        let value = e.target.value;
        setInfo((prev)=>{
            return{
                ...prev,
                [field]:value
            }
            
        })
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', flex: '1', margin: '10px 80px' }}>
            <div style={{ minWidth: '100px' }}>
                <Typography variant='body1' >
                    {title}
                </Typography>
            </div>
            <div style={{ flex: '1', backgroundColor: '#5EC39F', borderRadius: '5px' }}>
                <InputBase multiline  id={name} fullWidth  style={{ color: '#fff', padding: '5px 0 5px 10px' }} defaultValue={content?content:" "} 
                onChange={(e)=>handleInput(e)}/>
            </div>
        </div>
    )
}

export default TextAreaInput;