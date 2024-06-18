import {render, cleanup, screen, getByTestId, act, waitFor} from "@testing-library/react";
import {PostsTableProvider} from "@/components/PostsTable";
import '@testing-library/jest-dom'

import {Article, User} from "@/types/types";
import {getSearchedPostsAction} from "@/app/actions";
import {useAppDispatch, useAppSelector} from "@/Hooks/reduxHooks";
import {Provider} from "react-redux";
import {store} from "@/store/store";
import {useEffect} from "react";
import {setPosts} from "@/store/articlesSlice";
import {serializePosts} from "@/utils/serializePosts";

afterEach(cleanup);

jest.mock("@/app/actions", () => ({
    getSearchedPostsAction: jest.fn(),
}));

describe('Post Table', () => {
    it('should render the component', async () => {
        render(<PostsTableProvider postName='test' categories={["food"]} orderBy='views' currentPage={1} portionSize={4}/>)
        expect(getByTestId(document.documentElement, 'posts-table')).toBeInTheDocument();
    });
    it('should render all posts', async () => {

        (getSearchedPostsAction as jest.Mock).mockImplementation(() => {
            const mockPosts: Article[] = [
                {
                    id: 1,
                    author: {author_name: "name", email: "email"},
                    author_id: 1,
                    publish_date: Date.now().toString(),
                    content: "content",
                    title: "title",
                    category: "food",
                    views: 1000,
                    comments: 0,
                    featured_image: "http://via.placeholder.com/640x360",
                },
                {
                    id: 2,
                    author: {author_name: "name", email: "email"},
                    author_id: 1,
                    publish_date: Date.now().toString(),
                    content: "content",
                    title: "title",
                    category: "food",
                    views: 1000,
                    comments: 0,
                    featured_image: "http://via.placeholder.com/640x360"
                },
                {
                    id: 3,
                    author: {author_name: "name", email: "email"},
                    author_id: 1,
                    publish_date: Date.now().toString(),
                    content: "content",
                    title: "title",
                    category: "technologies",
                    views: 1000,
                    comments: 0,
                    featured_image: "http://via.placeholder.com/640x360"
                },
                {
                    id: 4,
                    author: {author_name: "name", email: "email"},
                    author_id: 1,
                    publish_date: Date.now().toString(),
                    content: "content",
                    title: "title",
                    category: "sport",
                    views: 1000,
                    comments: 0,
                    featured_image: "http://via.placeholder.com/640x360"
                }
            ];
            return Promise.resolve(mockPosts);
        });
        const mockDataCount: number = 4;
        const MockState = () => {
            const testPosts = useAppSelector((state) => state.articles.posts);
            const dispatch = useAppDispatch();
            useEffect(() => {
                (async function () {
                    const posts = await getSearchedPostsAction({
                        postName: 'test',
                        categories: ['food'],
                        orderBy: 'views',
                        currentPage: 1,
                        portionSize: 4,
                        type: 'desktop'
                    });

                    dispatch(setPosts(serializePosts(posts)));
                })();
            }, []);


            return null;
        };

        await act(async () => {
            render(
                <Provider store={store}>
                    <MockState/>
                    <PostsTableProvider postName="test" categories={["food"]} orderBy="views" currentPage={1}
                                        portionSize={5}/>
                </Provider>)
        });

        await waitFor(() => {
            const posts = screen.queryAllByTestId('post');
            expect(posts).toHaveLength(mockDataCount);
        });
    });
});