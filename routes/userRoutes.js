import express from "express";
import { addUser, getAllUsers, getUserById, removeUser } from "../controllers/userController.js";  // Ensure correct path

const userRouter = express.Router();

userRouter.route("/").get(getAllUsers).post(addUser);

userRouter.route("/:id").get(getUserById).delete(removeUser)

export default userRouter;
