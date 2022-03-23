import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography, Box } from '@mui/material';
import background from "../../Images/background.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const useStyle = makeStyles((theme) => ({
    container: {
        marginTop: "60px",
        marginBottom:'40px',
        backgroundColor: "white",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        height: '600px',
        overflow: 'hidden',
    },
    
    introtitlemain: {
        fontSize: "60px",
        lineHeight: "120%",
    },
    introtitle: {
        fontSize: "25px",
    },

}));
const HeroImage = () => {
    const classes = useStyle();
    return (
        <Container maxWidth="xl" disableGutters className={classes.container}>
            <Box className={classes.wrapper}>
                <div className={classes.text}>
                    <Typography className={classes.introtitlemain}>
                        W I L D
                    </Typography>
                    <Typography className={classes.introtitlemain}>
                        D I S C O V E R Y
                    </Typography>
                    <Typography className={classes.introtitle} variant="p">
                        Chia sẻ và khám phá về động vật hoang dã
                    </Typography>
                </div>
               


            </Box>

        </Container>
    );
};

export default HeroImage;