import { Router } from "express";
import SaleController from "../controllers/SaleController";
import { verifyToken } from "../jwt/jwt";

const controller = new SaleController();
const SaleRouter = Router();

SaleRouter.get("/sale", verifyToken, controller.getAll.bind(controller));
SaleRouter.post("/sale", verifyToken, controller.create.bind(controller));

export default SaleRouter;