"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateuser = void 0;
const index_1 = require("../index");
const usertabl_1 = require("../entity/usertabl");
const updateuser = async (req, res) => {
    try {
        await index_1.AppDataSource
            .createQueryBuilder()
            .update(usertabl_1.usertabl)
            .set({ name: req.body.name, Bday: req.body.bday, Address: req.body.address })
            .where("id = :id", { id: req.params.id })
            .execute();
        res.status(201).json({ message: 'User updated successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: req.body });
    }
};
exports.updateuser = updateuser;
