import userRoutes from "@/controllers/user/user.routes";
import { Router } from "express";

const router = Router();
router.use("/user", userRoutes);
export default router;