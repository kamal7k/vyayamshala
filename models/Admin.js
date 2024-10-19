import mongoose from "mongoose"

const adminSchema = new mongoose.Schema({

  fullName: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  }
}, { timeStamps: true })

export const Admin = mongoose.model('Admin', adminSchema)