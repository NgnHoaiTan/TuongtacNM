import React from 'react'

import LableTitle from '../LableTitle/LableTitle'

const input = ({ title, width, handleChange, errorSubmit, normal }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <LableTitle title={title} normal={normal ? true : false}/>
            <div style={{ flex: '1', marginLeft: '20px' }}>
                <input
                    style={{
                        width: width,
                        backgroundColor: '#ECECEC',
                        outlineStyle: 'none',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        padding: '8px 0 8px 6px',
                        fontSize: '15px'
                    }}
                    onChange={handleChange}
                    required={errorSubmit ? true : false}
                    onInvalid={errorSubmit ? (e) => e.target.setCustomValidity(errorSubmit) : (e) => e.target.setCustomValidity('')}
                    onInput={(e) => e.target.setCustomValidity('')}
                />
            </div>
        </div>
    )
}

export default input
