import {Request,Response,NextFunction} from 'express'
import {checkUser} from './user.model.midd'



export async function Usermiddleware(req:Request, res:Response, next:NextFunction){
    const id = req.params.id
    const checkUserById =await checkUser(id) 
    if(!checkUserById.length){
        return res.send("user not found")
    }else{
        next()
    }
}