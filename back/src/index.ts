const express=require('express')
import "reflect-metadata"
import { DataSource } from "typeorm";
import { usertabl } from "./entity/usertabl";
// const Router=require('../src/routes/routes')
import { adduser } from "./controllers/adduser";
import { getUsers } from "./controllers/getuser";
import { deleteuser } from "./controllers/deleteuser";
import {updateuser} from "./controllers/updateuser"
const cors = require('cors');

const app=express();
const PORT=3003;
app.use(cors());


export const AppDataSource = new DataSource({
    type: "oracle",
    
    username: "System",
    password: "Abc!1234",
   
    connectString:"localhost:1521/orcl",
    entities: [usertabl],
    synchronize: true,
  });


  AppDataSource.initialize()
  .then(() => {
    app.use(express.json());
    console.log("db connectted")

    app.post('/student',adduser)
    app.get('/student',getUsers)
    app.delete('/student/:id',deleteuser)
    app.put('/student/:id',updateuser)


   

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));