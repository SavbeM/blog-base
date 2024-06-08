'use client'
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useAppDispatch, useAppSelector} from "@/Hooks/reduxHooks";
import {Provider} from "react-redux";
import {store} from "@/store/store";
import {useEffect, useState} from "react";
import {setType} from "@/store/globalStatusSlice";
import {useWindowSize} from "@/Hooks/useWindowSize";
import {inter} from "@/fonts/fonts";

export const Pagination = ({totalPages}: { totalPages: number }) => {
    const params = useSearchParams()
    const categories = params.get('categories')
    const router = useRouter()
    const windowSize = useWindowSize()
    const dispatch = useAppDispatch()
    const pathname = usePathname()
    const currentPage = Number(params.get('currentPage')) || 1
    const [initialized, setInitialized] = useState(false);
    const type = useAppSelector(state => state.global.type)

    const setCurrentPage = (page: number) => {
        const newSearchParams = new URLSearchParams(params)
        newSearchParams.set('currentPage', page.toString())
        router.replace(`${pathname}?${newSearchParams.toString()}`)
    }
    useEffect(() => {
        if (!initialized && windowSize.width) {
            dispatch(setType(windowSize.width < 765 ? 'mobile' : 'desktop'));
            setInitialized(true);
        }
    }, [windowSize.width, initialized]);

    useEffect(() => {
        const newSearchParams = new URLSearchParams(params)
        newSearchParams.delete('currentPage')
        router.replace(`${pathname}?${newSearchParams.toString()}`)
    }, [categories]);

    const handleShowMore = () => {
        setCurrentPage(currentPage + 1)
    }

    if (type === 'mobile') {
        return (
            <button onClick={handleShowMore}>
                Show More
            </button>
        )
    } else {
        return (
            <div className="flex items-center space-x-2 mb-6">
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 ${inter.className} border border-gray-300 rounded bg-white text-black`}
                >
                    Prev
                </button>
                {renderPages(totalPages, currentPage, setCurrentPage)}
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 ${inter.className} border border-gray-300 rounded bg-white text-black`}
                >
                    Next
                </button>
            </div>
        )
    }
}

const renderPages = (totalPages: number, currentPage: number, setCurrentPage: (page: number) => void) => {
    const pages = []
    const portionSize = 10;
    let first = Math.max(1, currentPage - Math.floor(portionSize) + 1);
    let last = Math.min(totalPages, first + portionSize - 1);
    for (let i = first; i <= last; i++) {
        pages.push(<button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`px-4 py-2 border border-gray-300 rounded ${currentPage === i ? 'bg-black text-white' : 'bg-white text-black'}`}
        >
            {i}
        </button>)
    }

    return pages
}
export const PaginationProvider = ({totalPages}: { totalPages: number }) => {

    return (
        <Provider store={store}>
            <Pagination totalPages={totalPages}/>
        </Provider>
    )
}