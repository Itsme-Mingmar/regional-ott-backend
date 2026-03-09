import { Router } from "express";
import { startWatch, getWatchHistory } from "../controllers/watchHistory.controller.js";
import verifyJWT from "../middleware/verifyJwt.middleware.js";

const watchRouter = Router();

// user must be authenticated to start watching or view history
watchRouter.post("/start", verifyJWT, startWatch);
watchRouter.get("/history", verifyJWT, getWatchHistory);

export { watchRouter };