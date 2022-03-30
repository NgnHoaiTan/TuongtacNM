import React from 'react'

const LableTitle = ({ title, normal }) => {
    return (
        <div style={{ minWidth: normal ? '250px' : '150px' }}>
            {normal ? 
                <label >
                    {title}
                </label>
                :
                <label
                style={{
                    fontWeight: '500',
                    fontSize: '17px'
                }}
            >
                {title}
                <span style={{ color: 'red' }}>*</span>
            </label>
        }
        </div>
    )
}

export default LableTitle