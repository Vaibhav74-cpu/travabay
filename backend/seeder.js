import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

//dummy data
import users from "./data/users.js";
import packages from "./data/packages.js";
import enquiries from "./data/enquiries.js";

//models
import Admin from "./model/userModel.js";
import Package from "./model/packageModel.js";
import Enquiry from "./model/enquiryModel.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Admin.deleteMany();
    await Package.deleteMany();
    await Enquiry.deleteMany();

    //admin
    const createUsers = await Admin.insertMany(users);
    const adminUser = createUsers[0]._id;

    //packages
    const samplePackages = packages.map((pkg) => {
      return { ...pkg, user: adminUser };
    });

    //enquires
    const sampleEnquiries = enquiries.map((enquiry) => {
      return {
        ...enquiry,
        user: adminUser,
      };
    });

    await Package.insertMany(samplePackages);
    await Enquiry.insertMany(sampleEnquiries);

    console.log("Data Imported Successfully");
    process.exit();
  } catch (error) {
    console.error(`Error importing data: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Admin.deleteMany();
    await Package.deleteMany();
    await Enquiry.deleteMany();

    console.log("Data Destroyed Successfully");
    process.exit(0);
  } catch (error) {
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
