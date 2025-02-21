import { RolType } from "@/entities";
import { authorize,  } from "@/middlewares/auth.midleware";
import express from "express";
import { createNoteController } from "./note.controllers";
import { checkRole } from "@/middlewares";
import { ROUTES } from "@/constants";

const noteRoutes = express.Router();
/**
 * @swagger
 * /api/v1/usernotes/notes:
 *   post:
 *     summary: Create a new note
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Note created successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 */
noteRoutes.post(ROUTES.PRIVATE.USER,authorize,checkRole(RolType.USERNOTES),createNoteController);

export default noteRoutes;