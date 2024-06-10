import {Article, SearchedPostsRequestParams} from "@/types/types";
import {prisma} from "@/prisma/client";
import {unstable_noStore as noStore} from 'next/cache';
import {Params} from "@/utils/paramsGenerator";


export async function getTrendingPosts(): Promise<Article[]> {
    try {
        return await prisma.articles.findMany({
            take: 12, orderBy: [
                {views: 'asc'}
            ]
        })
    } catch (e) {
        console.log(`Popular post request error: ${e}`)
        throw e
    }
}

export async function getPost(id: number): Promise<Article> {
    try {
        const post = await prisma.articles.findUnique({
            where: {
                id: id,
            },
            include: {
                author: true,
            }
        })
        return post
    } catch (e) {
        console.log(e)
        throw e
    }
}

export async function getRecommendations(category: string): Promise<Article[]> {
    try {
        const posts = await prisma.articles.findMany({
            take: 6, where: {
                category: category
            }
        })
        return posts
    } catch (e) {
        console.log(e)
        throw e
    }
}

export async function getSearchedPosts(searchedParams : SearchedPostsRequestParams): Promise<Article[]> {
    const offset = (searchedParams.currentPage - 1) * searchedParams.portionSize

    try {
        const parameters = new Params(searchedParams, offset)

        return await prisma.articles.findMany({
            ...parameters
        })
    } catch (e) {
        console.log(e)
        throw e
    }
}

export async function getTotalPages(portionSize: number, searchParams: SearchedPostsRequestParams): Promise<number> {
    try {
        const parameters = new Params(searchParams, 0);
        const postsCount = await prisma.articles.count({
                where: {
                    ...parameters.where
                }
        })
        console.log(postsCount)
        return postsCount / portionSize
    }
    catch (e) {
        console.log(e)
        throw e
    }
}

