import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../Axios";

const initialState = {
    reactions: [],
    reaction: {},
    createresult: {},
    deleteresult: {}
}
export const fetchAsyncReactionsByVideo = createAsyncThunk('reaction_video/fetchAsyncReactionsByVideo', async (videoId) => {
    const response = await Axios.get(`reactionvideos/getbyvideo/${videoId}`);
    return response.data;
});
export const fetchAsyncReactionsInVideoByUser = createAsyncThunk('reaction_video/fetchAsyncReactionsInVideoByUser', async (data) => {
    const response = await Axios.get(`reactionvideos/getbyuserinvideo/${data.videoId}/${data.userId}`);
    return response.data;
});

export const createAsyncReaction = createAsyncThunk('reaction_video/createAsyncReaction', async (reaction) => {
    const response = await Axios.post('reactionvideos', {
        video: reaction.videoId,
        user:reaction.userId
    });
    return response.data;
});
export const deleteAsyncReaction = createAsyncThunk('reaction_video/deleteAsyncReaction', async (id) => {
    const response = await Axios.delete(`reactionvideos/${id}`);
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
        // get reaction of user on particular video
        [fetchAsyncReactionsInVideoByUser.fulfilled]: (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                reactionbyuser: action.payload
            }
        },
        [fetchAsyncReactionsInVideoByUser.rejected]: () => {
            console.log('Fetching Reactions of user on particular video rejected');
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
        [deleteAsyncReaction.fulfilled]: (state, action) => {
            return {
                ...state,
                deleteresult: action.payload
            }
        },
        [deleteAsyncReaction.rejected]: () => {
            console.log('delete Reaction rejected');
        },
    }
});
export const getReactions = (state) => state.reaction_video.reactions;
export const getReactionofUser = (state) => state.reaction_video.reactionbyuser
export default ReactionVideoSlice.reducer;