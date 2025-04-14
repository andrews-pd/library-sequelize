import { NextFunction, Request, Response } from "express";
import BookService from "../services/BookService";

class BookController {
  private bookService: BookService;
  constructor() {
    this.bookService = new BookService();
  }

  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const books = await this.bookService.getAll();
      res.status(200).json(books);
    } catch (error) {
      next(error);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const book = await this.bookService.create(req.body);
      res.status(201).json(book);
    } catch (error) {
      next(error);
    }
  }

  public async whishlist(req: Request, res: Response, next: NextFunction) {
    try {
      const { bookId } = req.params;
      const userId = req.body.user.id;
      const book = await this.bookService.whishlist(Number(bookId), userId);
      res.status(201).json(book);
    } catch (error) {
      next(error);
    }
  }
}

export default BookController;