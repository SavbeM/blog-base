export type User = { author_name: String, email: String }

export interface Article {
    id: number;
    author: User;
    author_id: number;
    publish_date: Date | string;
    content: string;
    title: string;
    category: string;
    tags?: string | null;
    views: number;
    comments: number;
    featured_image: string;
}

export type Options = {
    orderBy: string | null,
    categories: string | null
}
export type WindSize = {
    width: undefined | number,
    height: undefined | number,
}

export interface SearchedPostsRequestParams {
    postName: string,
    categories?: ('technology' | 'fashion' | 'travel' | "sports" | 'food')[],
    orderBy: 'views' | 'date',
    currentPage: number,
    portionSize: number,
    type?: 'mobile' | 'desktop',
}

export interface ArticlesSliceState{
    posts: Article[]
}

export interface GlobalSliceState{
    type: 'mobile' | 'desktop' | null
}