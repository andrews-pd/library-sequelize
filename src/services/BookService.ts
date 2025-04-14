import { ModelStatic } from "sequelize";
import Book from "../database/models/Book";
import schema from "./validations/schema";
import Category from "../database/models/Category";
import BookCategory from "../database/models/BookCategory";
import IBook from "../interfaces/IBook";
import User from "../database/models/User";
import Whishlist from "../database/models/Whishlist";

BookCategory.associations;

class BookService {
  private bookModel: ModelStatic<Book> = Book;
  constructor() {
    this.bookModel = Book;
  }

  public async getAll(): Promise<Book[]> {
    const books = await this.bookModel.findAll({
      include: [
        {
          model: Category,
          as: "categories",
        },
      ],
    });

    return books;
  }

  public async create(book: IBook): Promise<Book> {
    const { error } = schema.book.validate(book);

    if (error) {
      throw new Error(error.message);
    }

    await Promise.all(
      book.categories!.map(async (categoryId) => {
        const category = await Category.findByPk(categoryId);
        if (!category) {
          throw new Error(`Category with id ${categoryId} not found`);
        }
      })
    );
    
    const newBook = await this.bookModel.create({ ...book });
    
    const bookCategory = book.categories!.map((categoryId) => ({
      bookId: newBook.id,
      categoryId,
    }));

    await BookCategory.bulkCreate(bookCategory);

    return newBook;
  }

  public async whishlist(bookId: number, userId: number) {
    const book = await Whishlist.findOne({
      where: { bookId, userId },
    });
    if (book) {
      await Whishlist.destroy({
        where: { bookId, userId },
      });
      return { message: "Book removed from wishlist" };
    }

    const _book = await this.bookModel.findByPk(bookId);
    if (!_book) {
      throw new Error(`Book with id ${bookId} not found`);
    }

    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error(`User with id ${userId} not found`);
    }

    await Whishlist.create({ bookId, userId });
  }
}

export default BookService;
