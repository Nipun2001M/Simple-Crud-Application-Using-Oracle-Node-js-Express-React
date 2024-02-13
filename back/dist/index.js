"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const express = require('express');
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const usertabl_1 = require("./entity/usertabl");
// const Router=require('../src/routes/routes')
const adduser_1 = require("./controllers/adduser");
const getuser_1 = require("./controllers/getuser");
const deleteuser_1 = require("./controllers/deleteuser");
const updateuser_1 = require("./controllers/updateuser");
const cors = require('cors');
const app = express();
const PORT = 3003;
app.use(cors());
exports.AppDataSource = new typeorm_1.DataSource({
    type: "oracle",
    username: "System",
    password: "Abc!1234",
    connectString: "localhost:1521/orcl",
    entities: [usertabl_1.usertabl],
    synchronize: true,
});
exports.AppDataSource.initialize()
    .then(() => {
    app.use(express.json());
    console.log("db connectted");
    app.post('/student', adduser_1.adduser);
    app.get('/student', getuser_1.getUsers);
    app.delete('/student/:id', deleteuser_1.deleteuser);
    app.put('/student/:id', updateuser_1.updateuser);
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})
    .catch((error) => console.log(error));
