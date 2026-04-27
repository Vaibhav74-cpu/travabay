import mongoose from "mongoose";

const packageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },

    badge: {
      type: String,
      default: "",
    },

    tags: [
      {
        type: String,
      },
    ],

    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },

    reviews: {
      type: Number,
      required: true,
      default: 0,
    },

    inclusive: {
      type: Boolean,
      default: false,
    },

    days: {
      type: String,
      required: true,
    },

    destinations: {
      type: Number,
      required: true,
      default: 0,
    },

    departures: {
      type: Number,
      required: true,
      default: 0,
    },

    highlights: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    priceNote: {
      type: String,
      default: "Twin-sharing basis",
    },
  },
  {
    timestamps: true,
  },
);

const Package = mongoose.model("Package", packageSchema);
export default Package;
