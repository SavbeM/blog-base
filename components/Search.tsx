'use client'
import {inter} from "@/fonts/fonts";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {router} from "next/client";

export const Search = () => {
    const pathname = usePathname()
    const router = useRouter()
    const params = useSearchParams()
    const searchParams = new URLSearchParams(params);
    const handleSearch = (searchQuery: string) => {
        if(searchQuery) {
            searchParams.set('postName', searchQuery)
        }
        else if(!searchQuery){
            searchParams.delete('postName')
        }
        router.replace(`${pathname}?${searchParams.toString()}`)
    }
    return(

           <input defaultValue={searchParams.get('postName')?.toString()} onChange={(e) => handleSearch(e.target.value)} className={`${inter.className} peer w-full h-[43px] rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500`} placeholder='Find some posts...'/>
   )
}