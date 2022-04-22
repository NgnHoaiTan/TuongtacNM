import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React from 'react';

const CheckGenre = (props) => {
    const handleChange =async(e)=>{
        let field = e.target.name;
        let value = e.target.value;
        props.setInfo((prev)=>{
            return{
                ...prev,
                [field]:value
            }
            
        })
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', flex: '1', margin: '10px 80px' }}>
            <FormControl sx={{display:'flex',flexDirection:'row',alignContent:'center',width:'100%'}} >
                <FormLabel sx={{minWidth:'100px'}}>
                    <Typography variant='body1' sx={{fontWeight:400,color:'black',py:2}} >
                        {props.title}
                    </Typography>
                </FormLabel>
                <RadioGroup
                    row
                    aria-labelledby='radio-button-group-label'
                    defaultValue={props.content}
                    value={props.content}
                    name={props.name}
                    onChange={(e)=>handleChange(e)}
                    id={props.name}
                >
                    <FormControlLabel value={false} control={<Radio />} label='Nữ' />
                    <FormControlLabel value={true} control={<Radio />} label='Nam' />
                </RadioGroup>
            </FormControl>
        </div>

    );
};

export default CheckGenre;