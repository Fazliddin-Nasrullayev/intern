import {Request,Response} from 'express';
export interface newUpdatedBooks{
    newtitle:string,
    newauthor:string,
    newyear:number,
}

export interface IBooks{
GET:(req:Request,res:Response)=>any,
GET_BY_ID:(req:Request,res:Response)=>any,
POST:(req:Request,res:Response)=>any,
UPDATE:(req:Request,res:Response)=>any,
DELETE:(req:Request,res:Response)=>any,
POST_USER_BOOK:(req:Request,res:Response)=>any
}


export interface book {
    id?:number,
    title:string,
    author:string,
    year:number,
    created_at?:string
}