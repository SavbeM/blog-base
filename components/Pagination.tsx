'use client'
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useAppDispatch, useAppSelector} from "@/Hooks/reduxHooks";
import {Provider} from "react-redux";
import {store} from "@/store/store";
import {useEffect, useState} from "react";
import {setType} from "@/store/globalStatusSlice";
import {useWindowSize} from "@/Hooks/useWindowSize";
import {SearchedPostsRequestParams} from "@/types/types";

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
            setInitialized(true); // Помечаем компонент как инициализированный
        }
    }, [windowSize.width, initialized]);

    useEffect(() => {
        const newSearchParams = new URLSearchParams(params)
        newSearchParams.delete('currentPage')
        router.replace(`${pathname}?${newSearchParams.toString()}`)
    }, [categories]);

    const handleShowMore= () => {
        setCurrentPage(currentPage + 1)
    }

    if(type === 'mobile') {
        return (
            <button onClick={handleShowMore}>
                Show More
            </button>
        )
    }
    else{
        return (
            <div>
                Desktop pagination
            </div>
        )
    }
}

export const PaginationProvider = ({totalPages}: { totalPages: number}) => {

    return(
      <Provider store={store}>
         <Pagination  totalPages={totalPages}/>
      </Provider>
  )
}