import { Typography } from '@mui/material';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import * as moment from 'moment';
const PickDate = ({ title, content, setInfo, name }) => {
    const [startDate, setStartDate] = useState(content ? new Date(content) : new Date());
    const handleChange = (date) => {
        let field = name;
        setStartDate(date)
        let value = moment(date).format();
        setInfo((prev) => {
            return {
                ...prev,
                [field]: value
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
            <div style={{position:'relative'}}>
                <DatePicker dateFormat='dd/MM/yyyy' selected={startDate} onChange={(date) => handleChange(date)} />
                <span style={{position:'absolute',right:'10px',top:'3px'}}>
                    <CalendarTodayIcon sx={{fontSize:'16px'}} />
                </span>
            </div>
        </div>
    );
};

export default PickDate;