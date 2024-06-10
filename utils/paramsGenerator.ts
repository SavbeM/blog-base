import {SearchedPostsRequestParams} from "@/types/types";


export class Params {
    take: number;
    skip: number;
    where?: {
        title?: {
            contains: string;
        };
        category?: {
            in: string[];
        };
    };
    orderBy?: {
        [key: string]: 'asc';
    };
    public constructor(params: SearchedPostsRequestParams, offset: number) {
        this.take = params.portionSize;
        this.skip = offset;
        if(params.postName){
            this.where = {
                title: {
                    contains: params.postName
                }
            }
        }
        if (params.categories){
            this.where = {
                ...this.where,
                // @ts-ignore
                category: {in: params.categories.split(',')}
            }
        }
        if(params.orderBy){
            this.orderBy = {
                [params.orderBy]: 'asc'
            }
        }
    }
}

