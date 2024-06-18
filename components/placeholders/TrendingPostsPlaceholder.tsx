export const TrendingPostsPlaceholder = () => {

    const placeholders = Array.from({ length: 12 }, (_, index) => (
        <div key={index} className="flex flex-col items-center mb-[64px]">
            <div className="w-[304px] h-[176px] rounded-md bg-gray-300 animate-pulse"></div>
            <div className="flex flex-row w-[304px] items-center h-[30px] mt-[20px] rounded-md  bg-gray-300 animate-pulse">
            </div>
        </div>
    ));

    return (
        <div className="flex flex-col md:grid md:grid-cols-2 mt-[39px] md:w-[850px]">
            {placeholders}
        </div>
    )
};
