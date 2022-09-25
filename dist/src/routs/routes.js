"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = require("../moduls/users/index");
const index_2 = require("../moduls/books/index");
const book_middleware_1 = require("../middlwares/books/book.middleware");
const user_middlewar_1 = require("../middlwares/users/user.middlewar");
const users = new index_1.Users();
const books = new index_2.Books();
const router = (0, express_1.Router)();
router.post('/users', users.POST);
router.delete('/users/:id', user_middlewar_1.Usermiddleware, users.DELETE);
router.get('/users', users.GET);
router.get('/users/:id', user_middlewar_1.Usermiddleware, users.GET_BY_ID);
router.put('/users/:id', user_middlewar_1.Usermiddleware, users.UPDATE);
router.post('/books', books.POST);
router.get('/books', books.GET);
router.get('/books/:id', book_middleware_1.BookMiddleware, books.GET_BY_ID);
router.delete('/books/:id', book_middleware_1.BookMiddleware, books.DELETE);
router.put('/books/:id', book_middleware_1.BookMiddleware, books.UPDATE);
router.post('/users_books', book_middleware_1.BookMiddleware, user_middlewar_1.Usermiddleware, books.POST_USER_BOOK);
exports.default = router;
