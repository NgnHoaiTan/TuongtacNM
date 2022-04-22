import React from 'react';
import Checkbox from "react-custom-checkbox";
import CheckIcon from '@mui/icons-material/Check';
const CheckGenre = () => {

    return (
        <div>
            <Checkbox
                checked={true}
                icon={
                    <div
                        style={{
                            display: "flex",
                            flex: 1,
                            backgroundColor: "#174A41",
                            alignSelf: "stretch",
                        }}
                    >
                        <CheckIcon sx={{color:'white'}}/>
                    </div>
                }
                borderColor="#174A41"
                // borderWidth={0}
                borderRadius={20}
                style={{ overflow: "hidden" }}
                size={20}
                label="Nam"
                name='genre'
            />
            <Checkbox
                checked={true}
                icon={
                    <div
                        style={{
                            display: "flex",
                            flex: 1,
                            backgroundColor: "#174A41",
                            alignSelf: "stretch",
                        }}
                    >
                        <CheckIcon sx={{color:'white'}}/>
                    </div>
                }
                borderColor="#174A41"
                // borderWidth={0}
                borderRadius={20}
                style={{ overflow: "hidden" }}
                size={20}
                label="Nam"
                name='genre'
            />
        </div>
    );
};

export default CheckGenre;