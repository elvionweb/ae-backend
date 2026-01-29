import mongoose from "mongoose";

const loveNoteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      default: "Guest",
      maxlength: 50,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      maxlength: [350, "Message cannot exceed 350 characters"],
    },
    approved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("LoveNote", loveNoteSchema);