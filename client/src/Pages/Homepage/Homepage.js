import React,{useEffect} from 'react';
import HeroImage from "../../Components/HeroImage/HeroImage";
import IntroWrite from "../../Components/IntroWrite/IntroWrite";
import Explore from "../../Components/Explore/Explore";
import {useDispatch, useSelector } from 'react-redux';
import { fetchAsyncPosts} from '../../features/Slice/PostSlice';
import { fetchAsyncVideos } from '../../features/Slice/VideoSlice';
import { getresult } from '../../features/Auth/authSlice';
import { fetchAsyncUserByAccount, fetchAsyncUsers, getUser } from '../../features/Slice/UserSlice';
import NewsFeeds from '../../Components/Newsfeed/NewsFeeds';
const Homepage = () => {
    const dispatch = useDispatch();
    const {accountId} = useSelector(getresult);
    const user = useSelector(getUser);
    useEffect(() => {
        const calldispatch = ()=>{
            dispatch(fetchAsyncUserByAccount(accountId));
            dispatch(fetchAsyncPosts());
            dispatch(fetchAsyncVideos());
            dispatch(fetchAsyncUsers())
            
        }
        calldispatch()
    }, [dispatch,accountId])
    return (
        <div>
            <HeroImage/>
            <Explore />
            <IntroWrite user={user}/>
            <NewsFeeds user={user}/>
        </div>
    );
};

export default Homepage;