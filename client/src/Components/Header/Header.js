import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';
import avtUser from "../../Images/user5.jpg";
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';

import { AppBar, Toolbar, Box, IconButton, Typography, Container, Avatar, Tooltip, Button } from '@mui/material'
const pages = [
    <HomeIcon sx={{ fontSize: "32px"}} />,
    <ArticleIcon sx={{ fontSize: "30px" }} />,
    <VideoLibraryIcon sx={{ fontSize: "30px" }} />,
    <HelpIcon sx={{ fontSize: "30px" }} />
]
function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}
ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const Header = (props) => {

    return (
<<<<<<< HEAD
        <AppBar position='relative'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            mr: 2, display: {
                                xs: 'none', md: 'flex'
                            }
                        }}
                    >
                        WILD DISCOVERY
                    </Typography>
                    {/* <Box>
                         menu icon when screen is small 
                    </Box> */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } } }>
                        {pages.map((page, index) => (
                            <Button
                                key={index}    
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                    {/* avatar */}
                </Toolbar>
            </Container>
        </AppBar>
=======
        <ElevationScroll {...props}>
            <AppBar>
                <Container maxWidth="xl">
                    <Toolbar disableGutters >
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                                mr: 2, display: {
                                    xs: 'none', md: 'flex'
                                }
                            }}
                        >
                            WILD DISCOVERY
                        </Typography>
                        {/* <Box>
                         menu icon when screen is small 
                    </Box> */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: { md: 'center' },alignItems:'center', marginRight:{
                            md:'80px'
                        } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    sx={{ my: 0, mx: 1,py:2,px:3, color: 'white', display: 'block', 
                                        alignItem:'center',
                                        lineHeight:'0',
                                        '&:hover':{
                                        backgroundColor:'black'
                                    } }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        {/* avatar */}
                        <Box >
                            <IconButton disableRipple sx={{m:0,p:0}}>
                                <Avatar
                                    alt="avatar user"
                                    src={avtUser}

                                />
                                <MenuIcon sx={{ color: "white" }} />    
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ElevationScroll>
>>>>>>> 33db1ffd0265c75393102c56d7b01b41b600a13b
    );
};

export default Header;