import clsx from "clsx";

export const formatViews = (views: number): string => {
    const numString = views.toString()
    switch (numString.length) {
        case 4:
            return (numString.substring(0, 1) + "K")
        case 5:
            return (numString.substring(0, 2) + "K")
        case 6:
            const mil = numString.substring(0, 1);
            const tho = numString.substring(1, 2);
            return (mil + '.' + tho + clsx({" million": +mil === 1}, {" millions": +mil > 1}));
        case 7:
            return (numString.substring(0, 2) + ' millions')
        default:
            return numString
    }
}