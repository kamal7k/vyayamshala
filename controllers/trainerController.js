import mongoose from "mongoose";
import { Trainer } from "../models/Trainers.js";
import fs from "fs";

export const getAllTrainers = async (req, res) => {

  try {
    const trainers = await Trainer.find({});
    return res.status(200).json(trainers)
  } catch (err) {
    return res.status(400).json({ message: `${err}` })
  }
}

export const addTrainer = async (req, res) => {
  const { name, email } = req.body;

  try {
    await Trainer.create({
      name,
      email,
      image: req.imagePath,

    })

    return res.status(200).json({ message: 'Trainer Added successfully' })
  } catch (err) {
    fs.unlink(`.${req.imagePath}`, (err) => {

    })
    return res.status(400).json({ message: `${err}` })
  }
}

export const removeTrainer = async (req, res) => {
  const { id } = req.params;

  try {

    if (mongoose.isValidObjectId(id)) {

      const isExist = await Trainer.findById(id);
      console.log(isExist);

      if (isExist) {
        await Trainer.findByIdAndDelete(id);
        fs.unlink(`.${isExist.image}`, (err) => {

        });

        return res.status(200).json({ message: 'Successfully Deleted' })
      }
    }

  } catch (err) {
    return res.status(400).json({ message: `${err}` })
  }
}