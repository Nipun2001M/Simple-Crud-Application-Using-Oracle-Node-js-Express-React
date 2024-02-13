import { AppDataSource } from "../index";
import { usertabl } from "../entity/usertabl";
import { Request, Response } from 'express';



export const deleteuser = async (req: Request, res: Response) => {
    try {
      await AppDataSource
     
      .createQueryBuilder()
      .delete()
      .from(usertabl)
      .where("id = :id", { id: req.params.id })
      .execute()
  
      res.status(201).json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error(delete)' });
    }
  };