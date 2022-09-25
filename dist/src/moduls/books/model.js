"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksUsers = exports.UpdateBook = exports.DeleteBook = exports.GetBook = exports.GetBooks = exports.CreateBook = void 0;
const db_1 = require("../../utils/db");
const CreateBookQuery = `insert into books(title, author, year) values ($1, $2, $3) returning *`;
const CreateBook = (title, author, year) => (0, db_1.fetchdata)(CreateBookQuery, title, author, year);
exports.CreateBook = CreateBook;
const GetBooksQuery = `select * from books`;
const GetBooks = () => (0, db_1.fetchdata)(GetBooksQuery);
exports.GetBooks = GetBooks;
const GetBookQuery = `select * from books where id = $1`;
const GetBook = (id) => (0, db_1.fetchdata)(GetBookQuery, id);
exports.GetBook = GetBook;
const DeleteBookQuery = `delete from books where id = $1 returning *`;
const DeleteBook = (id) => (0, db_1.fetchdata)(DeleteBookQuery, id);
exports.DeleteBook = DeleteBook;
const UpdateBookQuery = `update books set title = $1, author = $2, year = $3 where id = $4 returning *`;
const UpdateBook = (title, author, year, id) => (0, db_1.fetchdata)(UpdateBookQuery, title, author, year, id);
exports.UpdateBook = UpdateBook;
const CreateUserBookQuery = `insert into users_books(user_id, book_id) values($1, $2)`;
const BooksUsers = (user_id, book_id) => (0, db_1.fetchdata)(CreateUserBookQuery, user_id, book_id);
exports.BooksUsers = BooksUsers;