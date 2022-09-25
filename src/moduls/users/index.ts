import {Request,Response} from 'express';
import {GetUsers,GetUser,DeleteUser,UpdateUser,CreateUser} from './model'
import {IUsers} from '../../types/users/interface'


export class Users implements IUsers {
   public async GET (req:Request,res:Response){
    const users = await GetUsers()
    res.send(users)
   }

   public async GET_BY_ID (req:Request,res:Response){
     const id = req.params.id

    const user = await GetUser(id)
    res.send(user)
   }

   public async POST (req:Request,res:Response){
    const { first_name, last_name, age } = req.body

        if( !first_name && !last_name && !age ){
            return res.send('enter all arguments: first_name, last_name, age ')
        }

        const create_user = await CreateUser(first_name, last_name, age)

        res.send(create_user)
   }

   public async DELETE (req:Request,res:Response){
    const id = req.params.id

        const deleted_user = await DeleteUser(id)
        res.send(deleted_user)
   }

   public async UPDATE (req:Request,res:Response){
    const id = req.params.id
        const { first_name, last_name, age } = req.body

        const user = await GetUser(id)
        console.log(first_name, last_name, age);

        const newname = first_name ? first_name : user[0].first_name
        const newlastname = last_name ? last_name : user[0].last_name
        const newage = age ? age : user[0].age

        const updated_user = await UpdateUser(newname, newlastname, newage, id)
        res.send(updated_user)
   }
}