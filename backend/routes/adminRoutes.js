import express from "express";
const router = express.Router();
import singleUpload from "../middleware/multer.js";
import {
  authAdmin,
  logoutAdmin,
  verifyEmailOtp,
} from "../controllers/adminController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

router.post("/login", singleUpload, authAdmin);
router.post("/logout", protect, logoutAdmin);
router.route("/verify-email").post(verifyEmailOtp);

export default router;
