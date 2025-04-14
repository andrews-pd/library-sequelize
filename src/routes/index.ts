import { Router } from "express";
import UserRouter from "./UserRouter";
import BookRouter from "./BookRouter";
import SaleRouter from "./SaleRouter";

const router = Router();

router.use(UserRouter);
router.use(BookRouter);
router.use(SaleRouter);

export default router;