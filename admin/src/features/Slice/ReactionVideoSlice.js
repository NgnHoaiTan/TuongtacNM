import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../Axios";

const initialState = {
    reactions: [],
    topreactions:[]
}
export const fetchAsyncReactionsByVideo = createAsyncThunk('reaction_video/fetchAsyncReactionsByVideo', async (videoId) => {
    const response = await Axios.get(`reactionvideos/getbyvideo/${videoId}`);
    return response.data;
});
export const fetchAsyncTopReaction = createAsyncThunk('reaction_video/fetchAsyncTopReaction', async () => {
    const response = await Axios.get(`reactionvideos/maxreactionbyvideo`);
    return response.data;
});


const ReactionVideoSlice = createSlice({
    name: 'reaction_video',
    initialState,
    reducers: {},
    extraReducers: {
        // get reactions by video
        [fetchAsyncReactionsByVideo.fulfilled]: (state, action) => {
            console.log('Fetching Reactions by video Successfully');
            return {
                ...state,
                reactions: action.payload
            }
        },
        [fetchAsyncReactionsByVideo.rejected]: () => {
            console.log('Fetching Reactions by video rejected');

        },  
        
        [fetchAsyncTopReaction.fulfilled]: (state, action) => {
            console.log('Fetching Reactions by video Successfully');
            return {
                ...state,
                topreactions: action.payload
            }
        },
    }
});
export const getReactions = (state) => state.reaction_video.reactions;
export const getTopReactions = state =>state.reaction_video.topreactions;
export default ReactionVideoSlice.reducer;