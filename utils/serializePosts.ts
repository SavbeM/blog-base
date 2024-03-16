import {Article} from "@/types/types";

export const serializePosts = (posts: Article[]) => {
    return posts.map(post => ({
        ...post,
        publish_date: post.publish_date.toString()
    }));
}