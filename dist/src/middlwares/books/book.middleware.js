"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookMiddleware = void 0;
const book_model_midd_1 = require("./book.model.midd");
async function BookMiddleware(req, res, next) {
    const id = req.params.id;
    const checkBookById = await (0, book_model_midd_1.checkBook)(id);
    if (!checkBookById.length) {
        return res.send("book not found");
    }
    else {
        next();
    }
}
exports.BookMiddleware = BookMiddleware;
