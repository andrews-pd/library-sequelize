import { Router } from "express";
import UserController from "../controllers/UserController";

const controller = new UserController();

const UserRouter = Router();

UserRouter.get("/user", controller.getAllUsers.bind(controller));

export default UserRouter;