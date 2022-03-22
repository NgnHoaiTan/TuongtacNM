import { Grid, Container, Typography, Box, Button, Tabs, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { exploreBg } from "../../common/color"
import NewestPost from '../Newest/NewestPost';
import NewestVideo from '../Newest/NewestVideo';
const useStyle = makeStyles((theme) => ({
    container: {
        padding: "0 40px"
    },
    wrapperexplore: {
        backgroundColor: exploreBg,
        padding: "30px",
        borderRadius: "20px"
    },
    btnOption: {
        marginTop: 10,

    },
    text: {
        marginBottom: 20
    },
    btnseemore: {
        display: 'flex',
        justifyContent: 'flex-end'
    }

}))
const Explore = () => {
    const [value, setValue] = useState('1');
    const classes = useStyle();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Container maxWidth="xl" className={classes.container}>
            <Box className={classes.wrapperexplore}>
                <Box component="div" className={classes.text}>
                    <Typography variant="h6" sx={{
                        color: 'white',
                    }}>
                        Khám phá ngay
                    </Typography>
                    {/* <div className={classes.btnOption}>
                        <Button
                            sx={{
                                color: 'white',
                                borderBottom: "2px solid #2269D2",
                                marginRight: '10px'
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: 300,
                                    fontSize: '13px'
                                }}
                            >
                                Bài viết mới nhất
                            </Typography>

                        </Button>
                        <Button sx={{
                            color: 'white',
                        }}>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: 300,
                                    fontSize: '13px'
                                }}
                            >
                                Video mới nhất
                            </Typography>
                        </Button>
                    </div> */}
                </Box>
                <Box >
                    <TabContext value={value}>
                        <Box sx={{
                            borderBottom: 1, borderColor: "#2269D2"
                        }}>
                            <TabList onChange={handleChange} aria-label="tab trantition">
                                <Tab label="Bài viết mới nhất" value="1" sx={{
                                    color:'white'
                                }} />
                                <Tab label="Video mới nhất" value="2" sx={{
                                    color:'white'
                                }}/>
                            </TabList>
                        </Box>

                        <TabPanel value="1" index={0}>
                            <NewestPost />
                        </TabPanel>
                        <TabPanel value="2" index={1}>
                            <NewestVideo />
                        </TabPanel>
                    </TabContext>

                </Box>

                {/* <NewestVideo /> */}

                <div className={classes.btnseemore}>
                    <Button variant="contained" className={classes.buttonview} size="small"

                        sx={{
                            mt: 3,

                        }}
                    >
                        <Typography variant="p" className={classes.textinbtn}>
                            Xem thêm
                        </Typography>
                    </Button>
                </div>

            </Box>
        </Container>

    );
};

export default Explore;