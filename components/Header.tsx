'use client'
import {eczar} from "@/fonts/fonts";
import Link from "next/link";
import {usePathname} from "next/navigation";
import clsx from "clsx";
import {useState} from "react";
import {CloseMenuIcon, MenuIcon} from "@/components/icons/Icons";

export const Header = () => {
    const links = [{path: '/', name: "Homepage"}, {path: '/blogs', name: "Blogs"}]
    const [isOpen, setIsOpen] = useState(false)
    const openMenu = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }
    const pathname = usePathname()
    return (
        <div
            className="flex justify-between items-center px-[63px] py-[53px]  h-[65px] shadow-[rgba(0, 0, 0, 0.16)] md:h-[133px] border-b-2 border-[rgba(0, 0, 0, 0.16)]">
            <h1 className={`${eczar.className} text-center tracking-[2.4px] antialiased font-[500] text-4xl`}>Blog
                Base</h1>
            <div className='flex justify-between'>
                {links.map((link) =>
                    <Link key={link.name} href={link.path}
                          className={clsx(`${eczar.className} text-center mr-[30px] tracking-[2.4px] hidden antialiased font-[400] md:block`, {'border-b-2 border-black': pathname === link.path})}>
                        {link.name}
                    </Link>
                )}
                <div className="block relative md:hidden">
                    {!isOpen ? <div onClick={() => openMenu}><MenuIcon/></div> :
                        <div>
                            <div onClick={openMenu}>
                                <CloseMenuIcon/>
                            </div>
                            <div
                                className="absolute right-[-50px] w-[125px] h-[85px] flex flex-col bg-white p-4 shadow-md border border-gray-300 rounded-md">
                                {links.map(link =>
                                    <Link key={link.name} href={link.path}
                                          className={clsx(`${eczar.className} text-center tracking-[2.4px] mb-2  antialiased font-[400] `, {'border-b-2 border-black': pathname === link.path})}>
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
