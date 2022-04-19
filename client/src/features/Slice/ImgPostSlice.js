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
    name:'image',
    initialState,
    reducers:{},
    extraReducers:{
        [fetchAsyncImagesByPost.fulfilled]:(state,action)=>{
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
export default  ImageSlice.reducer;