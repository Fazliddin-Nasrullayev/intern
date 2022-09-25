"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("./routs/routes");
const PORT = process.env.PORT || 1251;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes_1.default);
app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
});
