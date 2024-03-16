import {getTrendingPosts} from "@/app/api/api";
import {inter} from "@/fonts/fonts";
import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {Article} from "@/types/types";
import clsx from "clsx";
import {ViewsIcon} from "@/components/icons/Icons";
import Link from "next/link";
import {TrendingPostsError} from "@/components/errors/TrendingPostsError";
import {formatViews} from "@/utils/formatViews";
import {formatTitle} from "@/utils/formatTitle";




export const TrendingPosts = async () => {

    try {
    const popular = await getTrendingPosts().then(data => data.reverse())
    return (
        <>
            <div className="flex flex-col md:grid md:grid-cols-2 mt-[39px] md:w-[850px]">
                {popular.map((post: Article) => <PostPreview key={post.id} views={post.views}
                                                             image={post.featured_image} title={post.title} id={post.id}/>)}
            </div>
        </>)}
    catch (e) {
       return <TrendingPostsError />
    }
}

const PostPreview = ({image, title, views, id}: { image: string | StaticImport, title: String, views: number, id: number }) => {


    return (
        <div className="flex flex-col items-center h-[300px] mb-[64px]">
            <Link href={`/blogs/${id}`}><Image width={304} height={176} src="/placeholder.svg" alt="/placeholder.svg"/></Link>
            <Link href={`/blogs/${id}`}><h2
                className={`${inter.className}  w-[304px] mt-[20px] text-[22px] font-[500] text-center hover:decoration-solid hover:underline`}>{formatTitle(title)}</h2>
            </Link>
            <div className="flex flex-row w-[304px] items-center h-full">
                <p className='my-auto'>
                    <ViewsIcon/>
                </p>
                <p className={`${inter.className} my-auto text-[#808080] ml-2`}>Views: {formatViews(views)}</p>
            </div>
        </div>
    )
}