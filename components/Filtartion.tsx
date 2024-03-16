'use client'
import { usePathname, useRouter, useSearchParams} from "next/navigation";
import {useEffect, useMemo, useState} from "react";
import {debounce} from 'lodash';
import clsx from "clsx";
import {Options} from "@/types/types";
import {
    CloseMenuIcon,
    DateIcon,
    ExpandIcon,
    EyesIcon, FashionIcon, FoodIcon,
    FunnelIcon, ShrinkIcon, SportIcon,
    TechnologyIcon, TravelIcon,
    ViewsIcon
} from "@/components/icons/Icons";
import {useWindowSize} from "@/Hooks/useWindowSize";


export const Filtrartion = () => {
    const params = useSearchParams()
    const pathname = usePathname()
    const router = useRouter();
    console.log(params.get('postName'));
    const [isOpen, setIsOpen] = useState(false);
    const [categoriesIsOpen, setCategoriesIsOpen] = useState(false)
    const windowSize = useWindowSize()
    const [currentCategory, setCurrentCategory] = useState<string | null>(null)
    const [currentOrderBy, setCurrentOrderBy] = useState<string | null>(null)
    const categories = [
        {name: 'Technology', icon: <TechnologyIcon/>},
        {name: "Fashion", icon: <FashionIcon/>},
        {name: "Travel", icon: <TravelIcon/>},
        {name: 'Food', icon: <FoodIcon/>},
        {name: "Sports", icon: <SportIcon/>}
    ]
    useEffect(() => {
        if(windowSize.width && windowSize.width < 765){
            setIsOpen(true)
        }
    }, [windowSize.width]);


    const handleSortBy = (orderBy: string) => {
        setCurrentOrderBy(orderBy);
        debouncedHandleFiltrate({
            orderBy,
            categories: params.get('categories') ? params.get('categories') : 'none',
        });
    };

    const handleSetCategory = (category: string) => {
        setCurrentCategory(params.get('categories') ===  category ? 'none' : category)
        debouncedHandleFiltrate({
            orderBy: params.get('orderBy') ? params.get('orderBy') : 'default',
            categories: params.get('categories') ===  category ? 'none' : category
        })
    }
    const handleFiltrate = (options: Options) => {
        const newSearchParams = new URLSearchParams();
        const postName = params.get('postName');
        console.log(params.get('postName'))
        if(postName){
            newSearchParams.set('postName', postName);
        }

        if (options.categories === 'none') {
            newSearchParams.delete('categories');
        } else if (options.categories) {
            newSearchParams.set('categories', options.categories);
        }

        if (options.orderBy === 'default') {
            newSearchParams.delete('orderBy');
        } else if (options.orderBy) {
            newSearchParams.set('orderBy', options.orderBy);
        }

        router.replace(`${pathname}?${newSearchParams.toString()}`);

    };

    const debouncedHandleFiltrate = useMemo(() => debounce(handleFiltrate, 1000), [])

    return (
        <div className='flex flex-row h-full mb-[100px]'>
            {windowSize.width && windowSize.width > 768 && (
                <div onClick={() => setIsOpen((prevState) => !prevState)}
                     className={clsx("p-[9px] h-[43px] cursor-pointer border border-solid border-gray-500 rounded-l-md md:visible md:ml-2", {"rounded-r": !isOpen})}>
                    {isOpen ? <CloseMenuIcon/> : <FunnelIcon/>}
                </div>
            )}
            <div
                className={clsx('flex flex-row w-[250px] h-[43px] border border-gray-500 max-md:rounded md:rounded-r-md', {'visible': isOpen}, {'invisible': !isOpen})}>
                <div title='Views' onClick={() => handleSortBy('views')}
                     className={clsx('flex items-center justify-center w-[40px] border-r border-solid border-black cursor-pointer', {'bg-gray-300': currentOrderBy === 'views'})}>
                    <ViewsIcon/>
                </div>
                <div title="Publish Date" onClick={() => handleSortBy('publish_date')}
                     className={clsx('flex items-center justify-center w-[40px] border-r border-solid border-gray-500 cursor-pointer', {'bg-gray-300': currentOrderBy === 'publish_date'})}>
                    <DateIcon/>
                </div>
                <div className="flex flex-col">
                    <div className='flex flex-row cursor-pointer mt-[10px] ml-[25px]'
                         onClick={() => setCategoriesIsOpen((prev) => !prev)}><p
                        className='mr-[5px]'>Categories:</p> {categoriesIsOpen ? <ShrinkIcon/> : <ExpandIcon/>}</div>
                    <div
                        className={clsx('grid grid-cols-2 gap-2.5 border border-solid border-gray-500 rounded p-5 text-center z-20 bg-white ml-[25px]', {'invisible': !categoriesIsOpen}, {'visible': categoriesIsOpen && isOpen})}>
                        {categories.map((category) => {

                            return (
                                <div onClick={() => handleSetCategory(category.name.toLowerCase())} key={category.name} title={category.name}
                                     className={clsx('flex items-center justify-center flex-row border border-gray-500 cursor-pointer p-[5px] rounded', {'bg-gray-300': currentCategory === category.name.toLowerCase()})}>
                                    {category.icon}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}