import noteRoutes from "@/controllers/notes/notes.routes";
import userRoutes from "@/controllers/user/user.routes";
import { Router } from "express";

const router = Router();
router.use("/user", userRoutes);
router.use("/usernotes", noteRoutes);
export default router;