import express from "express";
const router = express.Router();
import singleUpload from "../middleware/multer.js";
import {
  deleteEnquiry,
  sendEnquiry,
} from "../controllers/enquiryController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

router.post("/", singleUpload, sendEnquiry);
router.route("/:id").delete(protect, admin, deleteEnquiry);

export default router;
