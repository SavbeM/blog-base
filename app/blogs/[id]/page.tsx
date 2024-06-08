import {chapter, inter} from "@/fonts/fonts";
import Image from "next/image";
import {getPost} from "@/app/api/api";
import {SocialIcon} from "react-social-icons/component";
import 'react-social-icons/facebook'
import 'react-social-icons/twitter'
import {EyesIcon, ViewsIcon} from "@/components/icons/Icons";
import {formatViews} from "@/utils/formatViews";
import {Recommendations} from "@/components/Recomendations";

export default async function Post({params}: { params: { id: string } }) {
    const post = await getPost(+params.id)
    let dateObject = new Date(post.publish_date);
    let monthName = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(dateObject);
    // @ts-ignore
    const formattedDate = `${monthName} ${post.publish_date.getDate()}, ${post.publish_date.getFullYear()}`
    const tags = post.tags?.split(' ').map((tag: string) => `#${tag}`).join(' ')

    return (
        <div className="flex flex-col m-auto items-center h-full">
            <h1 className={`${chapter.className} mx-[20px] text-[36px] text-center max-w-[750px] font-[700] md:text-[64px]  md:my-[48px]`}>{post.title}</h1>
            <Image className=' overflow-hidden rounded-md' width={640} height={420} src='/HomePage.png'
                   alt='/HomePage.png'/>
            <div className='flex flex-col w-full h-full max-md:max-w-[335px] md:w-[640px]'>
                <hr className='w-full my-[30px] h-1 bg-black'/>
                <div className='flex flex-col h-full md:flex-row md:justify-between'>
                    <div className='flex flex-row items-center'>
                        <Image className='rounded-full' src='/avatar.jpg' alt='/avatar.jpg' width={57} height={57}/>
                        <div className='flex flex-col ml-[16px]'>
                            <h3 className={`${inter.className} font-[700] text-[13px] tracking-[0.8px] md:text-[16px]`}>{post.author.author_name.toUpperCase()}</h3>
                            <p>{formattedDate}</p>
                        </div>
                    </div>
                    <div className={'max-md:w-full max-md:flex max-md:flex-row max-md:mt-[36px]'}>
                        <button
                            className='rounded-l-md border max-md:w-full md:py-[12px] md:px-[25px] border-solid border-gray-300 bg-white shadow-md transition-all duration-300 ease-in-out hover:bg-gray-100'>
                            <SocialIcon style={{width: '30px', height: '30px'}} url="https://www.facebook.com"
                                        bgColor='black'/>
                        </button>
                        <button
                            className='rounded-r-md border-r max-md:w-full py-[12px] md:px-[25px] border-t border-b  border-solid border-gray-300 bg-white shadow-md  transition-all duration-300 ease-in-out hover:bg-gray-100'>
                            <SocialIcon style={{width: '30px', height: '30px'}} url="https://twitter.com/?lang=ru"
                                        bgColor='black'/>
                        </button>
                    </div>
                </div>
                <p className={`${chapter.className} text-[16px] font-[400] mt-[58px]`}>
                    {post.content}
                </p>
                <p className={`${chapter.className} text-[16px] font-[400] mt-[30px]`}>
                    {post.content}
                </p>
                <p className={`${chapter.className} text-[16px] font-[400] mt-[30px]`}>
                    {post.content}
                </p>
                <div className='flex flex-row justify-between  mt-[40px]'>
                    <div className="flex flex-row">
                        <p className='my-auto'>
                            <ViewsIcon/>
                        </p>
                        <p className={`${inter.className} my-auto text-[#808080] ml-2`}>{formatViews(post.views)}</p>
                    </div>
                    <p className={`${inter.className}  text-[#808080] ml-2`}>Category: {post.category}</p>
                </div>
                <div className='mt-[20px]'>
                    <p className={`${inter.className}`}>Tags: {tags}</p>
                </div>
            </div>
            <div className='flex flex-col mb-[80px]'>
            <div className='w-full relative mt-[40px]'>
                <hr className='w-full my-[30px] h-1 bg-black'/>
                <div className='absolute left-1/2  transform -translate-x-1/2 top-[-5px]'>
                    <EyesIcon/>
                </div>
            </div>
             <h1 className={`${chapter.className} mb-[27px] text-center text-[23px] font-[700] md:text-[44px]`}>What to read next</h1>
            <Recommendations category={post.category}/>
            </div>
        </div>
    )
}