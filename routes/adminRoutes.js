import express from "express"
import { adminLogin, adminRegister } from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.route("/").post(adminLogin);

adminRouter.route("/register").post(adminRegister)

export default adminRouter;