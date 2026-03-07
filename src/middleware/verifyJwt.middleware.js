import jwt from "jsonwebtoken";
import User from "../models/User.js";
import apiError from "../utils/apiError.js";

const verifyJWT = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new apiError(401, "Unauthorized request");
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      throw new apiError(401, "Invalid access token");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new apiError(401, "Invalid or expired token");
  }
};

export default verifyJWT;