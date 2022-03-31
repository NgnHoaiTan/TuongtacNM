import { Typography } from '@mui/material'
import React from 'react'

const Infor = ({ title, content }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', flex: '1', margin: '10px 80px' }}>
            <div style={{ minWidth: '100px' }}>
                <Typography variant='body1' >
                    {title}
                </Typography>
            </div>
            <div style={{ flex: '1', backgroundColor: '#5EC39F', borderRadius: '5px' }}>
                <Typography variant='body1' sx={{ color: '#fff', padding: '5px 0 5px 10px' }}>{content}</Typography>
            </div>
        </div>
    )
}

export default Infor