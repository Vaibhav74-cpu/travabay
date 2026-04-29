import express from "express";
const router = express.Router();
import singleUpload from "../middleware/multer.js";

import { admin, protect } from "../middleware/authMiddleware.js";
import {
  deleteBooking,
  getBookingById,
  getBookings,
  reserveSpot,
  updateBookingStatus,
} from "../controllers/bookingController.js";

router
  .route("/")
  .post(singleUpload, reserveSpot)
  .get(protect, admin, getBookings);

router
  .route("/:id")
  .get(protect, admin, getBookingById)
  .delete(protect, admin, deleteBooking);

//admin mark as booking status
router.route("/:id/status").put(protect, admin, updateBookingStatus);

export default router;
