import express from "express";
const router = express.Router();
import singleUpload from "../middleware/multer.js";
import {
  createNewPackage,
  deletePackage,
  getPackageById,
  getPackages,
  getPackagesByCity,
  updatePackage,
} from "../controllers/packageController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

router.route("/add").post(protect, admin, singleUpload, createNewPackage);
router.get("/", getPackages);
// router.route("/:id").get(singleUpload, getPackageById);

router
  .route("/:id")
  .get(getPackageById) //user
  .put(protect, admin, singleUpload, updatePackage) //admin //user multer for file upload
  .delete(protect, admin, deletePackage); //admin

router.get("/city/:city", getPackagesByCity);

export default router;
