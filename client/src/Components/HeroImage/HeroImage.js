import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography, Box } from '@mui/material';
import background from "../../Images/background.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slider from '../Slider/Slider';

const useStyle = makeStyles((theme) => ({
    container: {
        marginTop: "40px",
        marginBottom: '40px',
        backgroundColor: "white",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        height: '600px',
        overflow: 'hidden',
    },
    text: {
        flex: '1',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center'
    },
    silder: {
        flex: '1'
    },
    introtitlemain: {
        fontSize: "60px",
        fontWeight: '700',
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
            <div className={classes.text}>
                <div>
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
            </div>
            <div className={classes.silder}>
                <Slider />
            </div>

        </Container>
    );
};

export default HeroImage;