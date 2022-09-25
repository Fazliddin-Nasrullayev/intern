import {Request,Response} from 'express';
import {GetBook,GetBooks,CreateBook,DeleteBook,UpdateBook,BooksUsers} from './model'
import {newUpdatedBooks} from '../../types/books/interface'
import {IBooks,book} from '../../types/books/interface'

export class Books implements IBooks{

    public async GET(req:Request,res:Response){
       const get_books = await GetBooks()
       res.send(get_books)
    }

    public async GET_BY_ID(req:Request,res:Response){
        const id = req.params.id
        const get_book = await GetBook(id)
        res.send(get_book)
    }

    public async POST(req:Request,res:Response){
        const { title, author, year } = req.body
        const create_book = await CreateBook(title, author, year )
        res.send(create_book)
    }

    public async UPDATE(req:Request,res:Response){
        const id = req.params.id
        const { title, author, year } = req.body
       
        const [oldBooks] = await GetBook(id)

        const newtitle = title?title : oldBooks.title
        const newauthor = author?author : oldBooks.author
        const newyear = year ? year : oldBooks.year

        const update_book = await UpdateBook(
            newtitle,
            newauthor,
            newyear,
            id
        )

        res.send(update_book)
    }

    public async DELETE(req:Request,res:Response){
        const id = req.params.id
        const deleted_book = await DeleteBook(id)
        res.send(deleted_book)
    }

    public async POST_USER_BOOK (req:Request,res:Response){
        try {
        const {user_id, book_id} = req.body

        const users_books = await BooksUsers(user_id, book_id)
       
        res.send("user book added successfully")
        } catch (error) {
            res.send('wrong user or book id')
        }
    }
}