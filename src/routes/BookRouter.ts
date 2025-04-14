import { Router } from "express";
import BookController from "../controllers/BookController";
import { verifyToken } from "../jwt/jwt";

const controller = new BookController();
const BookRouter = Router();

BookRouter.get("/book", controller.getAll.bind(controller));
BookRouter.post("/book", controller.create.bind(controller));
BookRouter.patch("/whishlist/:bookId", verifyToken, controller.whishlist.bind(controller));

export default BookRouter;