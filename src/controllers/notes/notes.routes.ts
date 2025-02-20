import { RolType } from "@/entities";
import { authorize, authorizeRoles } from "@/middlewares/auth.midleware";
import express from "express";
import { createNoteController } from "./note.controllers";

const router = express.Router();
router.post("/notes",authorize,authorizeRoles(RolType.USERNOTES,RolType.INVITED),createNoteController);

export default router;