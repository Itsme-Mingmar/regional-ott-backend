import { Router } from "express";
import { getAllMovies, getVideoById, uploadVideo, updateVideo, deleteVideo, getProvinceVideos, getAllProvinces } from "../controllers/video.controller.js";
import { uploadVideoAndThumbnail } from "../middleware/multer.middleware.js";
import verifyJWT from "../middleware/verifyJwt.middleware.js";
import roleVerify from "../middleware/role.middleware.js";

const videoRouter = Router();

videoRouter.get("/movies", getAllMovies);
videoRouter.get("/provinces", getAllProvinces);
videoRouter.get("/province/:provinceId/:category", getProvinceVideos);
videoRouter.get("/:videoId", getVideoById);
videoRouter.post("/upload",
    verifyJWT,
    roleVerify,
    uploadVideoAndThumbnail.fields([
        { name: 'video', maxCount: 1 },
        { name: 'thumbnail', maxCount: 1 }
    ]),
    uploadVideo
);

videoRouter.put("/:videoId",
    verifyJWT,
    roleVerify,
    uploadVideoAndThumbnail.fields([
        { name: 'video', maxCount: 1 },
        { name: 'thumbnail', maxCount: 1 }
    ]),
    updateVideo
);

videoRouter.delete("/:videoId",
    verifyJWT,
    roleVerify,
    deleteVideo
);

export { videoRouter };