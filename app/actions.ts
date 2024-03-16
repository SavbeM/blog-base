'use server'
import {getSearchedPosts} from "@/app/api/api";
import {Article, SearchedPostsRequestParams} from "@/types/types";

export const getSearchedPostsAction = async (params: SearchedPostsRequestParams): Promise<Article[]> => {
    return await getSearchedPosts(params)
}