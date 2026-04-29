import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    countryCode: {
      type: String,
      default: "+91",
      trim: true,
    },

    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },

    destination: {
      type: String,
      required: true,
      trim: true,
    },

    travellers: {
      type: Number,
      required: true,
      min: 1,
    },

    travelDetails: {
      type: String,
      default: "",
      trim: true,
    },

    status: {
      type: String,
      enum: ["pending", "done"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

const Enquiry = mongoose.model("Enquiry", enquirySchema);
export default Enquiry;
