import Image from "next/image";
import {chapter, eczar} from "@/fonts/fonts";
import {TrendingPosts} from "@/components/TrendingPosts";
import {Suspense} from "react";
import {TrendingPostsPlaceholder} from "@/components/placeholders/TrendingPostsPlaceholder";



export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <div className="flex flex-col  items-center max-w-[850px] pt-[52px] md:pt-[65px]">
                <Image width={854} height={533} src="/HomePage.png" alt="404"/>
                <h1 className={`${chapter.className} font-[600]  leading-8 text-[26px] px-[20px] pt-[32px] text-center md:pt-[44px] md:leading-normal md:text-[54px]`}>
                    Craft Your Digital Footprint with <span className={`${eczar.className} font-[500] md:bg-amber-200`}>Blog Base</span>.
                    Express and share your ideas, tell
                    stories, and connect with the world through your words.
                </h1>
                <h2 className={`${eczar.className} pt-[24px] px-[20px] text-[16px] text-center md:text-[32px] md:pt-[32px]`}>Unleash
                    Your Voice and Transform Your Thoughts into Engaging Stories. Start Your Blogging Journey
                    Today. </h2>
                <hr className="border-t-2 h-[2px] mt-[52px] w-full border-black md:max-w-[640px] md:mt-[24px]"/>
            </div>
            <h1 className={`${chapter.className} text-[44px] font-[700] mt-[64px]`}>Most Popular</h1>
            <Suspense fallback={<TrendingPostsPlaceholder/>}>
                <TrendingPosts/>
            </Suspense>
        </main>
    );
}
