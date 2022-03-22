import HeroImage from "../../Components/HeroImage/HeroImage";
import React from 'react';
import IntroWrite from "../../Components/IntroWrite/IntroWrite";
import Explore from "../../Components/Explore/Explore";

const Homepage = () => {
    return (
        <div>
            <HeroImage/>
            <Explore />
            <IntroWrite />
        </div>
    );
};

export default Homepage;