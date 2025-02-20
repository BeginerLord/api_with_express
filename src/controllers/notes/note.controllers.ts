import { CreateNote } from "@/bussines-logic/notes/newNote";
import { NextFunction, RequestHandler, Request, Response } from "express";

export const createNoteController:RequestHandler = async(req:Request,res:Response,next:NextFunction):Promise<void>=>{

    try {
        const userId= (req as any).user._id; //obtiene el id del usuario logueado
        const note = await CreateNote(req.body,userId);
        res.status(201).json(note); 
    } catch (error) {
        next(error);// Pasa el error al middleware de manejo de errores
    }
}