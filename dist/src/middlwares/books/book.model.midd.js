"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkBook = void 0;
const db_1 = require("../../utils/db");
const checkBookQuery = `select * from books where id = $1`;
const checkBook = (id) => (0, db_1.fetchdata)(checkBookQuery, id);
exports.checkBook = checkBook;
