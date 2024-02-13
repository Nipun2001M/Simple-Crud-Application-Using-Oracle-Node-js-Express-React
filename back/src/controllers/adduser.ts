import { AppDataSource } from "../index";
import { usertabl } from "../entity/usertabl";
import { Request, Response } from 'express';


export const adduser = async (req: Request, res: Response) => {
    try {
      await AppDataSource
        .createQueryBuilder()
        .insert()
        .into(usertabl)
        .values([
          {  name: req.body.name, Bday: req.body.bday,Address:req.body.address }
        ])
        .execute();
  
      res.status(201).json({ message: 'User added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };