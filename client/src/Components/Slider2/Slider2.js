import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";

import "./slider2.css";

// import required modules
import { Navigation, Autoplay } from "swiper";

const slider2Images = [
    'https://images.pexels.com/photos/146083/pexels-photo-146083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/568022/pexels-photo-568022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/4934920/pexels-photo-4934920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/162203/panthera-tigris-altaica-tiger-siberian-amurtiger-162203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1321524/pexels-photo-1321524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/36846/bald-eagle-adler-bird-of-prey-raptor.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
]

export default function Slider2() {
    return (
        <>
            <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={40}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Navigation,Autoplay]}
                className="mySwiper"
            >
                {slider2Images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            className="slider-img"
                            src={image}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
