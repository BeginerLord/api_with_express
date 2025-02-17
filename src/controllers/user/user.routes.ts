import { Router } from "express";
import { signupController } from "./user.controllers";
import { ROUTES } from "@/constants";

const userRoutes = Router();

/**
 * @swagger
 * /api/v1/user/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 */

userRoutes.post(ROUTES.PUBLIC.REGISTER, signupController);

export default userRoutes;
