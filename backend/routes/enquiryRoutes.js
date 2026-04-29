import express from "express";
const router = express.Router();
import singleUpload from "../middleware/multer.js";
import {
  deleteEnquiry,
  getEnquiries,
  markEnquiryDone,
  sendEnquiry,
} from "../controllers/enquiryController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

// router.post("/", singleUpload, sendEnquiry);
router
  .route("/")
  .post(singleUpload, sendEnquiry)
  .get(protect, admin, getEnquiries);

router.route("/:id").delete(protect, admin, deleteEnquiry);
router.route("/:id/done").put(protect, admin, markEnquiryDone);

export default router;
