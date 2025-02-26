import { Signup } from "@/bussines-logic/user";
import { Request, Response, NextFunction, RequestHandler } from "express";

export const signupController: RequestHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const result = await Signup(req.body);
    if (result instanceof Error) {
      res.status(400).json({ error: result.message });
    } else {
      res.status(201).json(result);
    }
  } catch (error) {
    next(error); // Pasa el error al middleware de manejo de errores
  }
};

export const signingController: RequestHandler = async (req:Request,res:Response,next:NextFunction):Promise<void>=>{
 
}