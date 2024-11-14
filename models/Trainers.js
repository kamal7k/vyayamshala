import mongoose from "mongoose";

const trainerSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  image: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  }

}, { timestamps: true })

export const Trainer = mongoose.model('Trainer', trainerSchema);