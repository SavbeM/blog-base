import {getRecommendations} from "@/app/api/api";
import {Article} from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import {inter} from "@/fonts/fonts";

export const Recommendations = async ({category}: { category: string}) => {
    const posts = await getRecommendations(category)
    return (
        <div className='w-[940px] h-full max-md:flex max-md:flex-col max-md:justify-center max-md:items-center md:grid md:grid-cols-3 md:gap-[20px]'>
            {posts.map((post: Article) => {
                return (
                    <div key={post.id} className='max-md:mt-[42px]'>
                        <Link href={`/blogs/${post.id}`}>
                            <div className="w-[304px] h-[176px] rounded overflow-hidden">
                            <Image className='m-auto' width={304} height={176} src={post.featured_image}
                                   alt='/placeholder.svg'/>
                            </div>
                        </Link>
                        <Link href={`/blogs/${post.id}`}>
                            <h1 className={`${inter.className} mt-[20px] text-[22px] font-[500] m-auto w-[262px] text-center  hover:decoration-solid hover:underline`}>{post.title}</h1>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}