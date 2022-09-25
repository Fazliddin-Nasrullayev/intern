"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUser = exports.GetUser = exports.GetUsers = exports.DeleteUser = exports.CreateUser = void 0;
const db_1 = require("../../utils/db");
const CreateUserQuery = `insert into users(first_name, last_name, age) values ($1, $2, $3) returning *`;
const CreateUser = (first_name, last_name, age) => (0, db_1.fetchdata)(CreateUserQuery, first_name, last_name, age);
exports.CreateUser = CreateUser;
const DeleteUserQuery = `delete from users where id = $1 returning *`;
const DeleteUser = (id) => (0, db_1.fetchdata)(DeleteUserQuery, id);
exports.DeleteUser = DeleteUser;
const GetUsersQuery = `
select u.id, u.first_name, u.last_name, u.age, u.created_at, 
COALESCE(json_agg(b) FILTER (WHERE b.title IS NOT NULL), '[]') as books
from users u 
left join
users_books u_b on u.id = u_b.user_id
left join
books b on u_b.book_id = b.id
group by u.id
`;
const GetUsers = () => (0, db_1.fetchdata)(GetUsersQuery);
exports.GetUsers = GetUsers;
const GetUserQuery = `
select u.id, u.first_name, u.last_name, u.age, u.created_at, 
COALESCE(json_agg(b) FILTER (WHERE b.title IS NOT NULL), '[]') as books
from users u 
left join
users_books u_b on u.id = u_b.user_id
left join
books b on u_b.book_id = b.id
where u.id = $1
group by u.id
`;
const GetUser = (id) => (0, db_1.fetchdata)(GetUserQuery, id);
exports.GetUser = GetUser;
const UpdateUserQuery = `update users set first_name = $1, last_name = $2, age = $3 where id = $4 returning *`;
const UpdateUser = (newname, newlastname, newage, id) => (0, db_1.fetchdata)(UpdateUserQuery, newname, newlastname, newage, id);
exports.UpdateUser = UpdateUser;
