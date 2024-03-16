import { configureStore } from '@reduxjs/toolkit'
import articlesSlice from "@/store/articlesSlice";
import globalStatusSlice from "@/store/globalStatusSlice";


export const store = configureStore({
    reducer: {
        articles: articlesSlice,
        global: globalStatusSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch