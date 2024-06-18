import { PrismaClient } from '@prisma/client'
import {Article, User} from "@/types/types";
const fs = require('fs')

const prisma = new PrismaClient()
const jsonDataUsers = fs.readFileSync('users.json');
const users = JSON.parse(jsonDataUsers);
const emails = users.map((user: User) => user.email)
const jsonDataArticles = fs.readFileSync('articles.json')
const articles = JSON.parse(jsonDataArticles);
const publishedDate = articles.map((article: Article) => article.publish_date)


type PlaceholderImage = {
    id: number;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}

async function main() {

    const existedUsers = await prisma.user.findMany({
        where: {
            email: {
                in: emails
            }
        }
    })
    const existedArticles = await prisma.articles.findMany({
        where: {
            publish_date: {
                in: publishedDate
            }
        }
    })
    const articlesToAdd = articles.filter((article: Article) => !existedArticles.some((existedArticle: Article) => existedArticle.publish_date === article.publish_date))
    const usersToAdd = users.filter((user: User) => !existedUsers.some((existedUsers: User) => existedUsers.email === user.email))

    const newUsers = await prisma.user.createMany({
        data: usersToAdd
    })
    const newArticles = await  prisma.articles.createMany(({
        data: articlesToAdd
    }))
    console.log({newUsers, newArticles})
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })