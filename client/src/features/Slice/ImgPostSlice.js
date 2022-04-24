import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../Axios";

const initialState={
    images:[],
    image:{},
    createresult:{},
    updateresult:{}
}
export const fetchAsyncImagesByPost = createAsyncThunk('image/fetchAsyncImagesByPost', async (postId) => {
    const response = await Axios.get(`images/getbypost/${postId}`);
    return response.data;
});
const ImageSlice = createSlice({
    name:'imagepost',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchAsyncImagesByPost.pending]:()=>{
            console.log('fetching images by post start');
        },
        [fetchAsyncImagesByPost.fulfilled]:(state,action)=>{
            console.log("Get images by post success")
            return{
                ...state,
                images:action.payload
            }
        },
        [fetchAsyncImagesByPost.rejected]:()=>{
            console.log('fetching images by post rejected');
        },
    }
});
export const getListImages = (state) => state.imagepost.images;
export default  ImageSlice.reducer;