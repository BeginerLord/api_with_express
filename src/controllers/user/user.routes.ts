import { Router } from "express";
import { signupController } from "./user.controllers";

const userRoutes = Router();

userRoutes.post("/signup", signupController);

export default userRoutes;
