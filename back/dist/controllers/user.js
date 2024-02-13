"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const usertabl_1 = require("../entity/usertabl");
const index_1 = require("../index");
const getUsers = async (req, res) => {
    try {
        const users = await index_1.AppDataSource.manager.find(usertabl_1.usertabl);
        res.json(users);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.getUsers = getUsers;
