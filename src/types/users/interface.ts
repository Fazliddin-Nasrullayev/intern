import {Request,Response} from 'express';

export interface IUsers{
GET:(req:Request,res:Response)=>any,
GET_BY_ID:(req:Request,res:Response)=>any,
POST:(req:Request,res:Response)=>any,
UPDATE:(req:Request,res:Response)=>any,
DELETE:(req:Request,res:Response)=>any
}