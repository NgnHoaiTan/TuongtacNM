import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Container, Grid, Box, Paper, createTheme } from '@mui/material';
import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Login from '../component/Login/Login';
import Signup from '../component/Singup/Singup';

const theme = createTheme();
const useStyle = makeStyles({
    container: {
        backgroundImage: `url(https://i.pinimg.com/originals/eb/52/b7/eb52b748226a96e4253124b60126eb59.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        alignItems: 'center',


    },
    paper: {

        minHeight: '70%',

    }
})
const LandingPage = () => {
    const [value, setValue] = useState('1');
    const classes = useStyle();
    const handleChange = (e, value) => {
        setValue(value);
    }
    return (
        <>
            <Container maxWidth='xl' disableGutters>
                <Grid className={classes.container}>
                    <Container style={{ position: 'fixed' }} component={Paper} maxWidth='xs' className={classes.paper} sx={{
                        borderRadius: '20px',
                        [theme.breakpoints.down(400)]: {
                            width: '100%',
                            height: '100%',
                        },
                        [theme.breakpoints.up('md')]: {
                            position: 'absolute',
                            top: '90px',
                            left: '60%',
                            py: 2
                        }
                    }}>
                        <Box sx={{
                            borderBottom: 1, borderColor: 'divider'
                        }}>
                            <TabContext value={value}>
                                <TabList onChange={handleChange} aria-label="tab for login">
                                    <Tab label="Đăng nhập" value="1" />
                                    <Tab label="Đăng ký" value="2" />
                                </TabList>
                                <TabPanel value="1" sx={{
                                    p: 0
                                }}>
                                    <Login />
                                </TabPanel>
                                <TabPanel value="2" sx={{
                                    p: 0
                                }}>
                                    <Signup />
                                </TabPanel>
                            </TabContext>

                        </Box>
                    </Container>
                </Grid>
            </Container>

        </>
    );
};

export default LandingPage;