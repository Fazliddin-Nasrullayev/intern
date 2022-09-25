import {Request,Response,NextFunction} from 'express'
import {checkUser, checkBook} from './userbook.model.midd'



export async function UserBookmiddleware(req:Request, res:Response, next:NextFunction){
    const {user_id, book_id} = req.body
    const checkUserById =await checkUser(user_id) 
    const checkBookById =await checkBook(book_id) 
    if(!checkUserById.length){
        return res.send("user not found")
    }else if(!checkBookById.length){
        return res.send("user not found")
    }
    else{
        next()
    }
}