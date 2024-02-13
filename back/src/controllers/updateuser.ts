import { AppDataSource } from "../index";
import { usertabl } from "../entity/usertabl";
import { Request, Response } from 'express';



export const updateuser = async (req: Request, res: Response) => {
    try {
    
        await AppDataSource
        .createQueryBuilder()
        .update(usertabl)
        .set({  name: req.body.name, Bday: req.body.bday,Address:req.body.address })
        .where("id = :id", { id: req.params.id })
        .execute()
  
      res.status(201).json({ message: 'User updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error:req.body });
    }
  };