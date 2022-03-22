import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HelpIcon from '@mui/icons-material/Help';
import { AppBar, Toolbar, Box, IconButton, Typography, Container, Avatar, Tooltip, Button } from '@mui/material'
const pages=[
    <HomeIcon sx={{fontSize:"32px"}}/>,
    <ArticleIcon sx={{fontSize:"30px"}}/>,
    <VideoLibraryIcon sx={{fontSize:"30px"}}/>,
    <HelpIcon sx={{fontSize:"30px"}}/>
]
const Header = () => {

    return (
        <AppBar>
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
                        {pages.map((page) => (
                            <Button
                                key={page}    
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
    );
};

export default Header;