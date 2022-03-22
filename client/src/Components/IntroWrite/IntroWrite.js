import React from 'react';
import { makeStyles } from '@mui/styles';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import introImg1 from "../../Images/introwrite1.jpg"
import introImg2 from "../../Images/introwrite2.jpg"
import introImg3 from "../../Images/introwite3_1.JPG"
const useStyle = makeStyles((theme) => ({
    container:{
        position:'relative',
        padding:'40px',
        height:'400px'
    },
    wrappertext: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        marginTop:'70px'
    },

    btnwrite: {
        backgroundColor: "#E52C2C",
        borderRadius:'40px',
        '&:hover':{
            backgroundColor: "#ff4100"
        }
    },
    bubble1:{
        content:"",
        backgroundColor:"#EE6F6F",
        borderRadius:'50%',
        width:'150px',
        height:'150px',
        opacity:'0.15',
        position: 'absolute',
        left:'350px',
        zIndex:'10',
    },
    bubble2:{
        content:"",
        backgroundColor:"#EE6F6F",
        borderRadius:'50%',
        width:'100px',
        height:'100px',
        opacity:'0.1',
        position: 'absolute',
        left:'80%',
        top:'70%',
        zIndex:'10',
    },
    bubble3:{
        content:"",
        backgroundColor:"#EE6F6F",
        borderRadius:'50%',
        width:'140px',
        height:'140px',
        opacity:'0.25',
        position: 'absolute',
        left:'10%',
        top:'60%',
        zIndex:'10',
    },
    bubble4:{
        content:"",
        backgroundColor:"#EE6F6F",
        borderRadius:'50%',
        width:'120px',
        height:'120px',
        opacity:'0.2',
        position: 'absolute',
        zIndex:'10',
        left:'55%',
        top:'50%'
    },
    image1:{
        width:"100px",
        height: "100px",
        borderRadius:'50%',
        position: 'absolute',
        left:'400px',
        bottom:'20%'
    },
    image2:{
        width:"150px",
        height: "150px",
        position: 'absolute',
        bottom:'-100px',
        left:'50%',
        
    },
    image3:{
        width:"120px",
        height: "120px",
        position: 'absolute',
        left:'80%',
        top:'30px'
    },
    img:{
        width: '100%',
        height: '100%',
        objectFit:'cover',
        borderRadius:'50%',
        
    }
}));

const IntroWrite = () => {
    const classes = useStyle();
    return (
        <Container maxWidth="xl" className={classes.container}>
            <div className={classes.bubble1}>
            </div>
            <div className={classes.bubble2}>
            </div>
            <div className={classes.bubble3}>
            </div>
            <div className={classes.bubble4}>
            </div>
            <Box component="div" className={classes.wrappertext}>
                <Typography sx={{
                    fontSize: '28px',
                    fontWeight: '600'
                }}>
                    Chia sẻ kiến thức
                </Typography>
                <Typography sx={{
                    fontSize: '28px',
                    fontWeight: '600'
                }}>
                    và những khám phá của bạn
                </Typography>
                <Box className={classes.btn}>
                    <Button variant="contained" className={classes.btnwrite}>
                        Viết bài
                    </Button>
                </Box>
            </Box>
            {/* <Box className={classes.listimage}>
                <div className={classes.image1}>
                    <img src={introImg1} alt="intro write image" className={classes.img}/>
                </div>
                <div className={classes.image2}>
                    <img src={introImg2} alt="intro write image" className={classes.img}/>
                </div>
                <div className={classes.image3}>
                    <img src={introImg3} alt="intro write image" className={classes.img}/>
                </div>
            </Box> */}


        </Container>
    );
};

export default IntroWrite;