import { TextField } from '@mui/material'
import React from 'react'

import LableTitle from '../LableTitle/LableTitle'

const TextArea = ({ title, handleChange, errorSubmit, row }) => {
    return (

        <div style={{ marginBottom: '15px' }}>
            <div style={{ marginBottom: '10px' }}>
                <LableTitle title={title} />
            </div>

            <div style={{ marginLeft: '30px' }}>
                <TextField
                    sx={{ backgroundColor: '#ECECEC', borderRadius: '5px' }}
                    multiline
                    fullWidth
                    rows={row}
                    onChange={handleChange}
                    required={errorSubmit ? true : false}
                    onInvalid={errorSubmit ? (e) => e.target.setCustomValidity(errorSubmit) : (e) => e.target.setCustomValidity('')}
                    onInput={(e) => e.target.setCustomValidity('')}
                />
            </div>
        </div>

    )
}

export default TextArea