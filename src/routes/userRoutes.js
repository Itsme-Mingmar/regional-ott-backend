import { Router } from "express";
import {
  registerUser,
  updateUserPlan,
  checkEmail,
  loginUser,
  getUserProfile,
  logoutUser,
} from "../controllers/user.controller.js";
import verifyJWT from "../middleware/verifyJwt.middleware.js";

const userRouter = Router();

userRouter.post("/registerUser", registerUser);
userRouter.post("/checkEmail", checkEmail);
userRouter.post("/login", loginUser);
userRouter.post("/logout", verifyJWT, logoutUser);
userRouter.put("/updatePlan", verifyJWT, updateUserPlan);
userRouter.get("/profile", verifyJWT, getUserProfile);

export { userRouter };