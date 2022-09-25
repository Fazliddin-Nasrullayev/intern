"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUser = void 0;
const db_1 = require("../../utils/db");
const checkUserQuery = `select * from users where id = $1`;
const checkUser = (id) => (0, db_1.fetchdata)(checkUserQuery, id);
exports.checkUser = checkUser;
