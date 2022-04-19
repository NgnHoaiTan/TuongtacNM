import React,{useEffect} from 'react';
import HeroImage from "../../Components/HeroImage/HeroImage";
import IntroWrite from "../../Components/IntroWrite/IntroWrite";
import Explore from "../../Components/Explore/Explore";
import {useDispatch } from 'react-redux';
import { fetchAsyncPosts } from '../../features/Slice/PostSlice';
const Homepage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncPosts());
    }, [dispatch])
    return (
        <div>
            <HeroImage/>
            <Explore />
            <IntroWrite />
        </div>
    );
};

export default Homepage;