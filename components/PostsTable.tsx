'use client'
import {Article, SearchedPostsRequestParams} from "@/types/types";
import React, {memo, useEffect, useState} from "react";
import Image from "next/image";
import {inter} from "@/fonts/fonts";
import {getSearchedPostsAction} from "@/app/actions";
import {markMatches} from "@/utils/markMatches";
import {useAppDispatch, useAppSelector} from "@/Hooks/reduxHooks";
import {addPosts, setPosts} from "@/store/articlesSlice";
import {Provider} from "react-redux";
import {store} from "@/store/store";
import {serializePosts} from "@/utils/serializePosts";
import {debounce} from "lodash";

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


    const debouncedGetSearchedPosts = debounce((params) => {
        getSearchedPostsAction(params).then((data) => {
            if (data) {
                const serializedPosts = serializePosts(data)
                if (type === 'mobile') {
                    dispatch(addPosts(serializedPosts))
                } else {
                    dispatch(setPosts(serializedPosts))
                }
            }
        });
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

    return (
        <div data-testid="posts-table" className='flex justify-center items-center flex-col max-w-[335px] '>
            {posts.map((post: Article) => {
                return (
                    <div data-testid="post" key={post.id} className='flex flex-col items-center mb-[50px]'>
                        <Image width={335} height={194} src='http://via.placeholder.com/640x360'
                               alt='/placeholder.svg'/>
                        <div
                            className={`${inter.className} text-center mt-[10px]`}>{postName ? markMatches(post.title, postName) : post.title}</div>
                    </div>
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