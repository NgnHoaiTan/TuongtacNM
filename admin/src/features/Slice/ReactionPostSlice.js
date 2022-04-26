import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../Axios";

const initialState = {
    reactions: [],
    reactionbyuser: {},
    topreactions:[]
}
export const fetchAsyncReactionsByPost = createAsyncThunk('reaction_post/fetchAsyncReactionsByPost', async (postId) => {
    const response = await Axios.get(`reactionposts/getbypost/${postId}`);
    return response.data;
});
export const fetchAsyncTopReaction = createAsyncThunk('reaction_post/fetchAsyncTopReactionByPost', async () => {
    const response = await Axios.get(`reactionposts/maxreactionbypost`);
    return response.data;
});


const ReactionPostSlice = createSlice({
    name: 'reaction_post',
    initialState,
    reducers: {},
    extraReducers: {
        // get reactions by post
        [fetchAsyncReactionsByPost.fulfilled]: (state, action) => {
            //console.log('Fetching Reactions by post Successfully');
            return {
                ...state,
                reactions: action.payload
            }
        },
        [fetchAsyncReactionsByPost.rejected]: () => {
            //console.log('Fetching Reactions by post rejected');

        },
        // get reactions by post
        [fetchAsyncTopReaction.fulfilled]: (state, action) => {
            return {
                ...state,
                topreactions: action.payload
            }
        },
        
        
    }
});
export const getTopReactions = (state)=>state.reaction_post.topreactions;
export const getReactions = (state)=>state.reaction_post.reactions;
export default ReactionPostSlice.reducer;