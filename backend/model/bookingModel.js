
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    countryCode: {
      type: String,
      default: "+91",
    },

    phoneNumber: {
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

    tripDetails: {
      type: String,
      required: true,
      trim: true,
    },

    specialRequest: {
      type: String,
      default: "",
      trim: true,
    },

    whatsappUpdates: {
      type: Boolean,
      default: true,
    },

    departureCity: {
      type: String,
      default: "All departures",
    },

    departureDate: {
      type: String,
      default: "",
    },

    packageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
      required: true,
    },

    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;