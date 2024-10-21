import jwt from "jsonwebtoken";
import { Admin } from "../models/Admin.js";


export const adminRegister = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    const isExist = await Admin.findOne({ email });

    if (isExist) {
      return res.status(409).json({ message: "email already in use" });
    }

    await Admin.create({
      fullName,
      email,
      password
    })

    return res.status(201).json({ message: "successfully registered" })
  } catch (err) {
    return res.status(400).json({ message: `${err}` })
  }
}


export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const isExist = await Admin.findOne({ email });

    if (!isExist) return res.status(404).json({ message: 'Admin doesn\'t exist' })

    if (isExist.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({
      id: isExist._id,
      isAdmin: isExist.isAdmin,
    }, 'secret')

    return res.status(200).json({
      token,
      email: isExist.email,
      idAdmin: isExist.isAdmin,
      id: isExist._id
    });



  } catch (err) {
    return res.status(400).json({ message: `${err}` })
  }
}