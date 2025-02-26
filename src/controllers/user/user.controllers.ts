import { Signin, Signup } from "@/bussines-logic";
import { asyncHandler, setError } from "@/utils";
import { Request, Response, NextFunction } from "express";

export const signupController = asyncHandler(
  async (req: Request, res: Response, _next: NextFunction) => {
    const result = await Signup(req.body);

    if (result instanceof Error) {
      throw setError(400, result.message);
    }

    res.status(201).json(result);
  }
);

export const signingController = asyncHandler(
  async (req: Request, res: Response, _next: NextFunction): Promise<void> => {
    const result = await Signin(req.body);

    if (result instanceof Error) {
      throw setError(400, result.message);
    }

    res.status(201).json(result);
  }
);
