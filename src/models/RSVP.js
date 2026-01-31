import mongoose from "mongoose";

const rsvpSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    email: {
      type: String,
      trim: true,
      maxlength: 50, // optional email
      validate: {
        validator: function (v) {
          if (!v) return true; // allow empty
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: "Invalid email address",
      },
    },
    phone: {
      type: String,
      required: [true, "Phone is required."],
      trim: true,
      minlength: 5,
      maxlength: 20,
    },
    attending: { type: Boolean, required: [true, "Attendance is required"] },
    guests: { type: Number, default: 1, min: [1, "At least 1 guest required"] },
  },
  { timestamps: true }
);

export default mongoose.model("RSVP", rsvpSchema);

