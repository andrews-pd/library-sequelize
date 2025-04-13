import { Router } from "express";
import UserController from "../controllers/UserController";

const controller = new UserController();
const UserRouter = Router();

UserRouter.get("/user", controller.getAllUsers.bind(controller));
UserRouter.post("/login", controller.login.bind(controller));
UserRouter.post("/user", controller.create.bind(controller));

export default UserRouter;