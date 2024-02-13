"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteuser = void 0;
const index_1 = require("../index");
const usertabl_1 = require("../entity/usertabl");
const deleteuser = async (req, res) => {
    try {
        await index_1.AppDataSource
            .createQueryBuilder()
            .delete()
            .from(usertabl_1.usertabl)
            .where("id = :id", { id: req.params.id })
            .execute();
        res.status(201).json({ message: 'User deleted successfully' });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error(delete)' });
    }
};
exports.deleteuser = deleteuser;
