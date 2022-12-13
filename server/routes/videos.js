import express from "express";
import {
  addVideo,
  addView,
  deleteVideo,
  getByTag,
  getVideo,
  random,
  search,
  sub,
  trend,
  updateVideo,
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// create video
router.post("/", verifyToken, addVideo);
// update video
router.put("/:id", verifyToken, updateVideo);
// delete video
router.delete("/:id", verifyToken, deleteVideo);
// get video
router.get("/find/:id", getVideo);
router.put("/view/:id", addView);
router.get("/trend", trend);
router.get("/random", random);
router.get("/sub", verifyToken, sub);
router.get("/tags", getByTag);
router.get("/search", search);

export default router;
