import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../Axios";

const initialState={
    videos:[],
    video:{},
    createresult:{},
    updateresult:{}
}
export const fetchAsyncVideos = createAsyncThunk('video/fetchAsyncVideos',async()=>{
    const response = await Axios.get('videos');
    return response.data;
});
export const fetchAsyncVideoById = createAsyncThunk('video/fetchAsyncVideoById',async(videoId)=>{
    const response = await Axios.get(`videos/${videoId}`);
    return response.data;
});
export const fetchAsyncVideoByUser = createAsyncThunk('video/fetchAsyncVideoByUser',async(userId)=>{
    const response = await Axios.get(`videos/getbyuser/${userId}`);
    return response.data;
});

export const fetchAsyncSearchVideos = createAsyncThunk('video/fetchAsyncSearchVideos',async(searchingText)=>{
    const response = await Axios.get(`videos/search/${searchingText}`);
    return response.data;
});

export const fetchAsyncVideoByFollowUser = createAsyncThunk('video/fetchAsyncVideoByFollowUser',async(userId)=>{
    const response = await Axios.get(`videos/getbyfollowuser/${userId}`);
    return response.data;
});
export const createAsyncVideo = createAsyncThunk('video/createAsyncVideo',async(data)=>{
    const response = await Axios.post(`videos`,
        data,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }  
    );
    return response.data;
});

const VideoSlice = createSlice({
    name:'video',
    initialState,
    reducer:{},
    extraReducers:{
        // get list Videos
        [fetchAsyncVideos.pending]:()=>{
            //console.log("Fetching Videos Start")
        },
        [fetchAsyncVideos.fulfilled]:(state,action)=>{
            //console.log("Fetching Videos Successfully");
            return{
                ...state,
                videos:action.payload
            }
        },
        [fetchAsyncVideos.rejected]:()=>{
            //console.log("Fetching Videos Rejected");
        },
        // get Video by id
        [fetchAsyncVideoById.fulfilled]:(state,action)=>{
            //console.log("Fetching Video by id Successfully");
            return{
                ...state,
                video:action.payload
            }
        },
        [fetchAsyncVideoById.rejected]:()=>{
            //console.log("Fetching Video by id Rejected");
        },

        // get Video by user
        [fetchAsyncVideoByUser.fulfilled]:(state,action)=>{
            //console.log("Fetching Videos by user Successfully");
            return{
                ...state,
                videos:action.payload
            }
        },
        [fetchAsyncVideoByUser.rejected]:()=>{
            //console.log("Fetching Videos by user Rejected");
        },
        // get videos by follow

        [fetchAsyncVideoByFollowUser.fulfilled]:(state,action)=>{
            return{
                ...state,
                videos:action.payload
            }
        },

        // create Video
        [createAsyncVideo.fulfilled]:(state,action)=>{
            //console.log("Create Video Successfully");
            return{
                ...state,
                createresult:action.payload
            }
        },

        // search videos
        [fetchAsyncSearchVideos.fulfilled]:(state,action)=>{
            return{
                ...state,
                videos:action.payload
            }
        },
       
    }
});
export const getListVideos = (state) => state.video.videos;
export const getVideo = (state) => state.video.video;
export default VideoSlice.reducer;