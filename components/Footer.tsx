import Marquee from "react-fast-marquee";
import clsx from "clsx";
import { eczar, inter, montserrat } from "@/fonts/fonts";
import Link from "next/link";


export const Footer = () => {
    const marqueeText = ['Digital product design', 'Remote work', 'UX design', 'Distributed teams', 'Creativity', 'Strategy', 'Suspense', 'Growth']
    const links = ['Twitter', 'LinedIn', 'RSS']
    return (
        <div className='w-full bg-black h-full'>
            <Marquee autoFill={true}>
                {marqueeText.map((text: string) => <div key={text}
                                                        className={clsx(`${montserrat.className} text-white text-[20px] tracking-[2px] mr-4`, {'font-[800]': marqueeText.indexOf(text) % 2 === 0}, {'font-[400]': marqueeText.indexOf(text) % 2 !== 0})}>{text}</div>)}
            </Marquee>
            <h1 className={`${eczar.className} mt-[100px] text-white text-center tracking-[2.4px] antialiased font-[500] text-4xl`}>Blog
                Base</h1>
            <p className={`${eczar.className} max-w-[480px] m-auto px-[20px] mt-[25px] text-[16px] text-white text-center tracking-[2.4px] antialiased font-[400]`}>Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Duis eu velit tempus erat egestas efficitur. In hac
                habitasse platea dictumst. Fusce a nunc eget ligula suscipit finibus. </p>
            <div className='flex justify-center mt-[32px]'>
                {links.map((link: string) =>
                    <Link href='/' className={`${inter.className} mr-[30px] text-[16px] text-white font-[500] underline`} key={link} >
                        {link}
                    </Link>
                )}
            </div>
            <p className={`${inter.className}  text-center mt-[64px] pb-[20px] font-[400] text-white text-[12px]`}>© 2024 SavbeM. All rights reserved.</p>
        </div>
    )
}