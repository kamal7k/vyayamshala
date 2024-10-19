import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
    unique: true,  // Ensure the number is unique
  },
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);
