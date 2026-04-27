import asyncHandler from "../middleware/asyncHandler.js";
import dotenv from "dotenv";
dotenv.config();
import getDataUri from "../util/dataUri.js";
import cloudinary from "../services/cloudinary.js";
import Package from "../model/packageModel.js";

// desc -> fetch all products
// route-> /api/packages/
//access-> public
export const getPackages = asyncHandler(async (req, res) => {
  const packages = await Package.find({});
  res.json(packages);
});

// desc -> fetch a packages
// route-> /api/packages/id
//access-> public
export const getPackageById = asyncHandler(async (req, res) => {
  const pkg = await Package.findById(req.params.id);
  if (pkg) {
    return res.json(pkg);
  } else {
    res.status(404);
    throw new Error("Package not found");
  }
});
