import express from "express";
import { 
    getFeedPosts,
    getUserPosts,
    likePost
} from "../controllers/posts.js";
import { verifyToken } from "../middlewares/auth.js";

const router = express.Router();

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

router.patch("/:postId", verifyToken, likePost);

export default router;