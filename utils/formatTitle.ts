export const formatTitle = (title: String): String => {
    const splited = title.split(' ')
    if (splited.length > 8) {
        return (splited.slice(0, 7).join(' ') + "...")
    }
    return title
}