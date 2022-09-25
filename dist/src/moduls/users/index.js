"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const model_1 = require("./model");
class Users {
    async GET(req, res) {
        const users = await (0, model_1.GetUsers)();
        res.send(users);
    }
    async GET_BY_ID(req, res) {
        const id = req.params.id;
        const user = await (0, model_1.GetUser)(id);
        res.send(user);
    }
    async POST(req, res) {
        const { first_name, last_name, age } = req.body;
        if (!first_name && !last_name && !age) {
            return res.send('enter all arguments: first_name, last_name, age ');
        }
        const create_user = await (0, model_1.CreateUser)(first_name, last_name, age);
        res.send(create_user);
    }
    async DELETE(req, res) {
        const id = req.params.id;
        const deleted_user = await (0, model_1.DeleteUser)(id);
        res.send(deleted_user);
    }
    async UPDATE(req, res) {
        const id = req.params.id;
        const { first_name, last_name, age } = req.body;
        const user = await (0, model_1.GetUser)(id);
        console.log(first_name, last_name, age);
        const newname = first_name ? first_name : user[0].first_name;
        const newlastname = last_name ? last_name : user[0].last_name;
        const newage = age ? age : user[0].age;
        const updated_user = await (0, model_1.UpdateUser)(newname, newlastname, newage, id);
        res.send(updated_user);
    }
}
exports.Users = Users;
