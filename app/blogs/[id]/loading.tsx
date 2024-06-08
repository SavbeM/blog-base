import {SocialIcon} from "react-social-icons/component";
import {SpinnerIcon} from "@/components/icons/Icons";


export default function PostLoading() {
    return (
        <div className="flex flex-col m-auto items-center h-full max-w-[1440px]">
            <div className="max-md:mt-[20px] md:mt-[40px] w-[250px] md:w-[650px] h-[30px] bg-gray-300 animate-pulse rounded"/>
            <div className="mt-[10px] w-[250px] md:w-[650px] h-[30px] bg-gray-300 animate-pulse rounded"/>
            <div className="max-md:mt-[20px] md:mt-[48px] max-md:w-[415px] max-md:h-[260px] md:w-[640px] md:h-[420px] bg-gray-300 animate-pulse rounded"/>
            <div className='absolute max-md:top-[330px] md:top-[480px]'>
                <SpinnerIcon height={30} width={30}/>
            </div>
            <div className='flex flex-col w-[335px] md:w-[640px]'>
                <hr className='w-full my-[30px] h-1 bg-black'/>
                <div className='flex flex-col h-full md:flex-row md:justify-between'>
                    <div className='flex flex-row items-center'>
                        <div className='rounded-full animate-pulse bg-gray-400 w-[57px] h-[57px]'/>
                        <div className='flex flex-col ml-[16px]'>
                            <div className="h-[16px] bg-gray-400 w-[100px] animate-pulse rounded"/>
                            <div className="h-[16px] bg-gray-400 w-[100px] mt-[10px] animate-pulse rounded"/>
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
                <div className='my-[20px] grid columns-1 gap-2.5'>
                    <div className={`h-[16px] bg-gray-400 w-full animate-pulse rounded`}/>
                    <div className={`h-[16px] bg-gray-400 w-full animate-pulse rounded`}/>
                    <div className={`h-[16px] bg-gray-400 w-full animate-pulse rounded`}/>
                    <div className={`h-[16px] bg-gray-400 w-full animate-pulse rounded`}/>
                </div>
            </div>
        </div>
    )
}