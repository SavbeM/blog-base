'use client'
import {ErrorIcon} from "@/components/icons/Icons";
import {silkscreen} from "@/fonts/fonts";

export default function PostError() {
    return(
            <div className="flex flex-col md:flex-col justify-center items-center h-[150px] ">
                <ErrorIcon/>
                <h1 className={` ${silkscreen.className} text-center md:ml-2 font-[500] text-md md:text-2xl underline underline-red`}>Can&apos;t
                    get a posts data,
                    try to refresh the page
                </h1>
            </div>
    )
}