import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Article, ArticlesSliceState, SearchedPostsRequestParams} from "@/types/types";
import {getSearchedPostsAction} from "@/app/actions";
import {serializePosts} from "@/utils/serializePosts";


export const getArticlesThunk = createAsyncThunk(
    'articles/getArticles',
    async (params: SearchedPostsRequestParams) => {
        const posts = await getSearchedPostsAction(params);
        return serializePosts(posts);
    }
)

export const initialState: ArticlesSliceState = {
    posts: [],
    fetching: false,
    error: null
}

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        addPosts(state, action: PayloadAction<Article[] | null>) {
            if (action.payload != null) {
                state.posts = [...state.posts, ...action.payload]
            }
        },
        setPosts(state, action: PayloadAction<Article[]>) {
            state.posts = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getArticlesThunk.pending, (state) => {
                state.fetching = true
            })
            .addCase(getArticlesThunk.fulfilled, (state, action) => {
                state.fetching = false
                if (action.type === 'mobile') {
                    state.posts = [...state.posts, ...action.payload]
                } else {
                    state.posts = action.payload
                }
            })
            .addCase(getArticlesThunk.rejected, (state, action) => {
                state.fetching = false
                state.error = action.error.message ?? null
            })
    },
})

export const {addPosts, setPosts} = articlesSlice.actions
export default articlesSlice.reducer