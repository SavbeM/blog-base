import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Article, ArticlesSliceState} from "@/types/types";


export const initialState: ArticlesSliceState = {
    posts: []
}

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        addPosts(state, action: PayloadAction<Article[] | null>){
            if(action.payload != null){
                state.posts = [...state.posts, ...action.payload]
            }
        },
        setPosts(state,action: PayloadAction<Article[]>){
            state.posts = action.payload
        },
    },
})

export const {addPosts, setPosts} = articlesSlice.actions
export default articlesSlice.reducer