import express from "express";
import { addTrainer, getAllTrainers, getTrainerById, removeTrainer, updateTrainer } from "../controllers/trainerController.js";
import { updateFile, validFile } from "../middlewares/fileValid.js";

const trainerRouter = express.Router();

trainerRouter.route("/").get(getAllTrainers).post(validFile, addTrainer)

trainerRouter.route("/:id").get(getTrainerById).patch(updateFile, updateTrainer).delete(removeTrainer);

export default trainerRouter