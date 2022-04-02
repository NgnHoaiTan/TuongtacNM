import { Button, Container, IconButton, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { footerColor } from '../../common/color'
import { Box } from '@mui/system';
const useStyle = makeStyles((theme) => ({
    container: {
        backgroundColor: footerColor,
        padding:'20px',
    },



}))
const Footer = () => {
    const classes = useStyle()
    return (
        <Container maxWidth="xl" className={classes.container}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems:'flex-end',
                borderBottom:'1px solid white',
                py:1
            }}>
                <Typography sx={{
                    fontWeight:500, fontSize:'17px',color:'white',cursor:"pointer",  borderLeft: '1px solid white', px:1
                }}>
                    Trang chủ
                </Typography>
                <Typography sx={{
                    fontWeight:500, fontSize:'17px',color:'white',cursor:"pointer", borderLeft: '1px solid white', px:1
                }}>
                    Điều khoản
                </Typography >
                <Typography sx={{
                    fontWeight:500, fontSize:'17px',color:'white',cursor:"pointer",  borderLeft: '1px solid white', px:1
                }}>
                    Liên hệ
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems:'flex-end',
                
            }}>
                {/* <div className={classes.btncontact}>
                    <Button  startIcon={<ContactMailIcon />} sx={{
                        backgroundColor: "transparent", color: 'white',
                    }}>
                        Liên hệ
                    </Button>
                </div> */}
                <IconButton>
                    <FacebookIcon sx={{
                        color: 'white'
                    }} />
                </IconButton>
                <IconButton>
                    <TwitterIcon sx={{
                        color: 'white'
                    }} />
                </IconButton>
                <IconButton>
                    <InstagramIcon sx={{
                        color: 'white'
                    }} />
                </IconButton>
            </Box>
            

        </Container>
    );
};

export default Footer;
