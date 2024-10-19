import express from "express"
import { adminLogin } from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.route("/").post(adminLogin);

export default adminRouter;