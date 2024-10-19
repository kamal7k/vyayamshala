import express from "express";
import { addTrainer, getAllTrainers, removeTrainer } from "../controllers/trainerController.js";
import { validFile } from "../middlewares/fileValid.js";

const trainerRouter = express.Router();

trainerRouter.route("/").get(getAllTrainers).post(validFile, addTrainer)

trainerRouter.route("/:id").delete(removeTrainer)

export default trainerRouter