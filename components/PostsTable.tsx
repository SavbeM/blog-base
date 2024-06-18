'use client'
import {Article, SearchedPostsRequestParams} from "@/types/types";
import React, {memo, useEffect} from "react";
import Image from "next/image";
import {eczar, inter} from "@/fonts/fonts";
import {markMatches} from "@/utils/markMatches";
import {useAppDispatch, useAppSelector} from "@/Hooks/reduxHooks";
import {getArticlesThunk} from "@/store/articlesSlice";
import {Provider} from "react-redux";
import {store} from "@/store/store";
import {debounce} from "lodash";
import Link from "next/link";

const PostsTable = memo(function PostTable({
                                               postName,
                                               categories,
                                               orderBy,
                                               currentPage,
                                               portionSize
                                           }: SearchedPostsRequestParams) {

    const dispatch = useAppDispatch()
    const posts = useAppSelector((state) => state.articles.posts)
    const type = useAppSelector(state => state.global.type)
    const fetching = useAppSelector(state => state.articles.fetching)

    const debouncedGetSearchedPosts = debounce((params) => {
        dispatch(getArticlesThunk(params))
    }, 1000);


    useEffect(() => {
        if (type) {
            debouncedGetSearchedPosts({
                postName,
                categories,
                orderBy,
                currentPage,
                portionSize,
                type
            });
            console.log(posts)
        }
    }, [categories, currentPage, dispatch, orderBy, portionSize, postName, type]);

    if (fetching) {
        return <div className="flex min-h-screen flex-col items-center space-y-4">
            {[...Array(5)].map((_, i) => (
                <div key={i} className="flex flex-col items-center space-y-2">
                    <div className="w-[335px] h-[188px] bg-gray-300 animate-pulse rounded"></div>
                    <div className="w-[335px] h-4 bg-gray-300 animate-pulse rounded"></div>
                    <div className="w-[335px] h-4 bg-gray-300 animate-pulse rounded"></div>
                </div>
            ))}
        </div>
    }
    if (posts.length === 0) {
        return <div className="flex my-36 items-center justify-center">
            <h1 className={`${eczar.className} text-3xl`}>
                No posts found
            </h1>
        </div>
    } else
        return (
            <div data-testid="posts-table"
                 className='min-h-screen flex justify-center items-center flex-col max-w-[335px]'>
                {posts.map((post: Article) => {
                    return (
                        <Link key={post.id} href={`/blogs/${post.id}`}>
                            <div data-testid="post" key={post.id} className='flex flex-col items-center mb-[50px]'>
                                <div className="overflow-hidden w-[335px] h-[194px] rounded">
                                <Image width={335} height={194} src={post.featured_image}
                                       alt='/placeholder.svg'/>
                                </div>
                                <div
                                    className={`${inter.className} text-center mt-[10px]`}>{postName ? markMatches(post.title, postName) : post.title}</div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        );
});


export const PostsTableProvider = memo(function PostsTableProvider({
                                                                       postName,
                                                                       categories,
                                                                       orderBy,
                                                                       currentPage,
                                                                       portionSize
                                                                   }: SearchedPostsRequestParams) {

    return (
        <Provider store={store}>
            <PostsTable postName={postName} categories={categories} orderBy={orderBy} currentPage={currentPage}
                        portionSize={portionSize}/>
        </Provider>
    )
})