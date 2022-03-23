import React from 'react';
import HeroImage from "../../Components/HeroImage/HeroImage";
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