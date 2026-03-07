import apiError from '../utils/apiError.js';
import asyncHandler from '../utils/asyncHandler.js';

const roleVerify = asyncHandler(async (req, res, next) => {
    if (req.user.role !== "admin") {
        throw new apiError(401, "Not authorized role");
    }
    next();
});

export default roleVerify;