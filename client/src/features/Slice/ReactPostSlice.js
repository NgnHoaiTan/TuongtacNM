import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../Axios";

const initialState = {
    reactions: [],
    reactionbyuser: {},
    createresult: {},
    deleteresult: {}
}
export const fetchAsyncReactionsByPost = createAsyncThunk('reaction_post/fetchAsyncReactionsByPost', async (postId) => {
    const response = await Axios.get(`reactionposts/getbypost/${postId}`);
    return response.data;
});
export const fetchAsyncReactionsInPostByUser = createAsyncThunk('reaction_post/fetchAsyncReactionsInPostByUser', async (data) => {
    const response = await Axios.get(`reactionposts/getbyuserinpost/${data.postId}/${data.userId}`);
    return response.data;
});

export const createAsyncReaction = createAsyncThunk('reaction_post/createAsyncReaction', async (reaction) => {
    const response = await Axios.post('reactionposts', {
        post:reaction.post
    });
    return response.data;
});
export const deleteAsyncReaction = createAsyncThunk('reaction_post/deleteAsyncReaction', async (id) => {
    const response = await Axios.delete(`reactionposts/${id}`);
    return response.data;
});

const ReactionPostSlice = createSlice({
    name: 'reaction_post',
    initialState,
    reducers: {},
    extraReducers: {
        // get reactions by post
        [fetchAsyncReactionsByPost.fulfilled]: (state, action) => {
            console.log('Fetching Reactions by post Successfully');
            return {
                ...state,
                reactions: action.payload
            }
        },
        [fetchAsyncReactionsByPost.rejected]: () => {
            console.log('Fetching Reactions by post rejected');

        },
        // get reaction of user on particular post
        [fetchAsyncReactionsInPostByUser.fulfilled]:(state,action)=>{
            console.log(action.payload)
            return{
                ...state,
                reactionbyuser:action.payload
            }
        },
        [fetchAsyncReactionsInPostByUser.rejected]:()=>{
            console.log('Fetching Reactions of user on particular post rejected');
        },

        // create reaction
        [createAsyncReaction.fulfilled]: (state, action) => {
            console.log('create Reaction Successfully');
            return {
                ...state,
                createresult: action.payload
            }
        },
        [createAsyncReaction.rejected]: () => {
            console.log('create Reaction rejected');

        },
        [deleteAsyncReaction.fulfilled]:(state, action)=>{
            return{
                ...state,
                deleteresult:action.payload
            }
        },
        [deleteAsyncReaction.rejected]:()=>{
            console.log('delete Reaction rejected');
        },
    }
});
export const getReactions = (state)=>state.reaction_post.reactions;
export const getReactionofUser = (state) =>state.reaction_post.reactionbyuser
export default ReactionPostSlice.reducer;