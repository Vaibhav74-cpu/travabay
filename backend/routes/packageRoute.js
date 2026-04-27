import express from "express";
const router = express.Router();
import singleUpload from "../middleware/multer.js";
import { getPackageById, getPackages } from "../controllers/packageController.js";


router.get("/", getPackages);
router.route("/:id").get(singleUpload, getPackageById);

export default router;
