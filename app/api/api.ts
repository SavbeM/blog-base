import {Article, SearchedPostsRequestParams} from "@/types/types";
import {prisma} from "@/prisma/client";
import {unstable_noStore as noStore} from 'next/cache';


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

export async function getSearchedPosts({postName, categories, orderBy, currentPage, portionSize, type} : SearchedPostsRequestParams): Promise<Article[]> {
    const offset = (currentPage - 1) * portionSize
    noStore()

    try {
        const parameters: any = {}
        parameters.take = portionSize
        parameters.skip = offset
        if(postName){
            parameters.where = {
                title: {
                    contains: postName
                }
            }
        }
        if (categories){
            parameters.where = {
                ...parameters.where,
                category: {in: categories.split(',')}
            }
        }
        if(orderBy){
            parameters.orderBy = {
                [orderBy]: 'asc'
            }
        }
        console.log(parameters)
        return await prisma.articles.findMany({
            ...parameters
        })
    } catch (e) {
        console.log(e)
        throw e
    }
}

export async function getTotalPages(portionSize: number) {
    try {
        const postsCount = prisma.articles.count()
        return postsCount / portionSize
    }
    catch (e) {
        console.log(e)
        throw e
    }
}

