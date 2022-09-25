import {fetchdata} from "../../utils/db"

const CreateBookQuery = `insert into books(title, author, year) values ($1, $2, $3) returning *`;


export const CreateBook = (title, author, year) => fetchdata(CreateBookQuery, title, author, year) 


const GetBooksQuery = `select * from books`


export const GetBooks = () => fetchdata(GetBooksQuery)

const GetBookQuery = `select * from books where id = $1`


export const GetBook = (id) => fetchdata(GetBookQuery, id)

const DeleteBookQuery = `delete from books where id = $1 returning *`

export const DeleteBook = (id) => fetchdata(DeleteBookQuery, id)

const UpdateBookQuery = `update books set title = $1, author = $2, year = $3 where id = $4 returning *`

export const UpdateBook = (title, author, year, id) => fetchdata(UpdateBookQuery, title, author, year, id)

const CreateUserBookQuery = `insert into users_books(user_id, book_id) values($1, $2)`

export const BooksUsers = (user_id, book_id) => fetchdata(CreateUserBookQuery,user_id, book_id)
