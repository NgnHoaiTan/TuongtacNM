import React from 'react'

const input = ({ title, width, handleChange, errorSubmit }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <div style={{ minWidth: '150px' }}>
                <label 
                    style={{ 
                        fontWeight: '500', 
                        fontSize: '17px' 
                    }}
                >
                    {title}
                    <span style={{ color: 'red'}}>*</span>
                </label>
            </div>

            <div style={{ width: '100%' }}>
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
