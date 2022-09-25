"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usermiddleware = void 0;
const user_model_midd_1 = require("./user.model.midd");
async function Usermiddleware(req, res, next) {
    const id = req.params.id;
    const checkUserById = await (0, user_model_midd_1.checkUser)(id);
    if (!checkUserById.length) {
        return res.send("user not found");
    }
    else {
        next();
    }
}
exports.Usermiddleware = Usermiddleware;
