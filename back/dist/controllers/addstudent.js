"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adduser = void 0;
const index_1 = require("../index");
const usertabl_1 = require("../entity/usertabl");
const adduser = async (req, res) => {
    try {
        await index_1.AppDataSource
            .createQueryBuilder()
            .insert()
            .into(usertabl_1.usertabl)
            .values([
            { name: req.body.name, Bday: req.body.bday, Address: req.body.address }
        ])
            .execute();
        res.status(201).json({ message: 'User added successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.adduser = adduser;
