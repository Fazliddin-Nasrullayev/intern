import {Request,Response,NextFunction} from "express"
import {checkBook} from './book.model.midd'

export async function BookMiddleware(req:Request, res:Response, next:NextFunction){
    const id = req.params.id
    const checkBookById =await checkBook(id) 
    if(!checkBookById.length){
        return res.send("book not found")
    }else{
        next()
    }
}