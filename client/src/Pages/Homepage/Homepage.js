import React,{useEffect, useState} from 'react';
import HeroImage from "../../Components/HeroImage/HeroImage";
import IntroWrite from "../../Components/IntroWrite/IntroWrite";
import Explore from "../../Components/Explore/Explore";
import {useDispatch, useSelector } from 'react-redux';
import { fetchAsyncPosts } from '../../features/Slice/PostSlice';
import { fetchAsyncVideos } from '../../features/Slice/VideoSlice';
import { getresult } from '../../features/Auth/authSlice';
import { fetchAsyncUserByAccount, getUser } from '../../features/Slice/UserSlice';
const Homepage = () => {
    const dispatch = useDispatch();
    const {accountId} = useSelector(getresult);
    const user = useSelector(getUser);
    console.log(user);
    console.log(accountId);
    useEffect(() => {
        dispatch(fetchAsyncPosts());
        dispatch(fetchAsyncVideos());
        dispatch(fetchAsyncUserByAccount(accountId));
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