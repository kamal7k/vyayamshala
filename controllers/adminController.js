import { Admin } from "../models/Admin.js";


export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const isExist = await Admin.findOne({ email });

    if (!isExist) return res.status(404).json({ message: 'Admin doesn\'t exist' })

    if (isExist.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    return res.status(200).json({ message: 'Login successful', admin: isExist });



  } catch (err) {
    return res.status(400).json({ message: `${err}` })
  }
}