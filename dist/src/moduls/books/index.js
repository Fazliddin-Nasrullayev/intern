"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Books = void 0;
const model_1 = require("./model");
class Books {
    async GET(req, res) {
        const get_books = await (0, model_1.GetBooks)();
        res.send(get_books);
    }
    async GET_BY_ID(req, res) {
        const id = req.params.id;
        const get_book = await (0, model_1.GetBook)(id);
        res.send(get_book);
    }
    async POST(req, res) {
        const { title, author, year } = req.body;
        const create_book = await (0, model_1.CreateBook)(title, author, year);
        res.send(create_book);
    }
    async UPDATE(req, res) {
        const id = req.params.id;
        const { title, author, year } = req.body;
        const [oldBooks] = await (0, model_1.GetBook)(id);
        const { newauthor, newtitle, newyear } = this.newUpdatedArgs(title, author, year, oldBooks);
        const update_book = await (0, model_1.UpdateBook)(newtitle, newauthor, newyear, id);
        res.send(update_book);
    }
    async DELETE(req, res) {
        const id = req.params.id;
        const deleted_book = await (0, model_1.DeleteBook)(id);
        res.send(deleted_book);
    }
    async POST_USER_BOOK(req, res) {
        try {
            const { user_id, book_id } = req.body;
            const users_books = await (0, model_1.BooksUsers)(user_id, book_id);
            res.send("user book added successfully");
        }
        catch (error) {
            res.send('wrong user or book id');
        }
    }
    newUpdatedArgs(title, author, year, oldBooks) {
        const newtitle = title ? title : oldBooks.title;
        const newauthor = author ? author : oldBooks.author;
        const newyear = year ? year : oldBooks.year;
        return { newtitle, newauthor, newyear };
    }
}
exports.Books = Books;
