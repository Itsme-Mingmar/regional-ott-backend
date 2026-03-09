import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/userRoutes.js";
import { videoRouter } from "./routes/videoRoutes.js";
import { watchRouter } from "./routes/watchHistoryRoutes.js";

const app = express();

app.use(express.json());
// app.use(cors({
//   origin: process.env.FRONTEND_URL,
//   credentials: true
// }));
app.use(cookieParser());
app.use("/api/user",userRouter);
app.use("/api/video", videoRouter);
app.use("/api/watch", watchRouter);

export default app;