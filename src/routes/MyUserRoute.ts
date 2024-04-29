import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

// Get current user
router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser);

// Create new user
router.post("/", jwtCheck, MyUserController.createCurrentUser);

// Update current user
router.put("/", jwtCheck, jwtParse, validateMyUserRequest, MyUserController.updateCurrentUser);

export default router;
