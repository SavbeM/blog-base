const { PrismaClient } = require("@prisma/client");
type PlaceholderImage = {
    id: number;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}

const prisma = new PrismaClient()

async function update_images() {
    const articles = await prisma.articles.findMany();
    const images = [];
    let page = 1;
    while (images.length < articles.length) {
        const placeholderImages: PlaceholderImage[] = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${articles.length}`).then((res: any) => res.json());
        for(let i = 0; i < placeholderImages.length; i++) {
            if(placeholderImages[i].width > 1280 && placeholderImages[i].height > 720) {
                images.push(placeholderImages[i]);
            }
            if(images.length === articles.length) {
                break;
            }
        }
        page++;
    }
    for (let i = 0; i < articles.length; i++) {
        await prisma.articles.update({
            where: { id: articles[i].id },
            data: { featured_image: images[i].download_url },
        });
    }

}

try {
    (async () => {
        await update_images()
        await prisma.$disconnect()
        console.log('Images updated successfully')
        process.exit(0)
    })()
}
catch (e) {
    console.error(e)
    process.exit(1)
}

