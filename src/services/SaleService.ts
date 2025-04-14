import { ModelStatic } from "sequelize";
import Sale from "../database/models/Sale";
import BookSale from "../database/models/BookSale";
import Book from "../database/models/Book";
import ISale from "../interfaces/ISale";
import schema from "./validations/schema";

BookSale.associations;

class SaleService {
  private saleModel: ModelStatic<Sale> = Sale;
  constructor() {
    this.saleModel = Sale;
  }

  public async getAll(userId: number) {
    const config = {
      include: [
        {
          model: Book,
          as: "books",
        },
      ],
    };

    const sales = await this.saleModel.findAll({
      where: {
        userId: userId,
      },
      ...config,
    });

    return sales;
  }

  public async create(sale: ISale) {
    const { error } = schema.sale.validate(sale);
    if (error) {
      throw new Error(error.message);
    }

    await Promise.all(
      sale.books!.map(async (e) => {
        const book = await Book.findByPk(e.bookId);
        if (!book) {
          throw new Error(`Book with id ${e.bookId} not found`);
        }
      })
    );

    const newSale = await this.saleModel.create({ ...sale });

    const bookeSale = sale.books!.map((e) => ({
      ...e,
      saleId: newSale.id,
    }));

    await BookSale.bulkCreate(bookeSale);

    return newSale;
  }
}

export default SaleService;
