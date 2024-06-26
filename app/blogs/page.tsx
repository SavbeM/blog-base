import {Search} from "@/components/Search";
import {Filtrartion} from "@/components/Filtartion";
import {PostsTableProvider} from "@/components/PostsTable";
import {getTotalPages} from "@/app/api/api";
import {PaginationProvider} from "@/components/Pagination";
import {SearchedPostsRequestParams} from "@/types/types";



export default async function Blogs({searchParams}: { searchParams: SearchedPostsRequestParams }) {
    const portionSize: number = 5
    const currentPage: number = searchParams.currentPage || 1
    const totalPages: number = await getTotalPages(portionSize, searchParams)

    return (
        <div className="flex min-h-screen flex-col items-center">
            <div
                className='flex max-md:items-center mt-[20px] mb-[60px] max-md w-full px-5 max-md:gap-2.5 flex-col md:flex-row h-[60px] md:w-[640px]  md:transform md:translate-x-[120px]'>
                <Search/>
                <Filtrartion/>
            </div>
            <PostsTableProvider type={'mobile'} currentPage={currentPage} postName={searchParams.postName}
                                orderBy={searchParams.orderBy} portionSize={portionSize}
                                categories={searchParams.categories}/>
            <PaginationProvider totalPages={totalPages}/>
        </div>
    )
}