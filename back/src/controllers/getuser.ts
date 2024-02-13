import { usertabl } from "../entity/usertabl";
import { AppDataSource } from "../index";

import { Request, Response } from 'express';


export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await AppDataSource.manager.find(usertabl);
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
