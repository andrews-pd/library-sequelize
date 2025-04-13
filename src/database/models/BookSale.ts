import { Model } from 'sequelize';
import db from '.';
import sequelize from 'sequelize';
import Book from './Book';
import Category from './Category';

class BookSale extends Model {
  declare bookId: number;
  declare saleId: number;
  declare quantity: number;
}

BookSale.init({
  saleId: {
    type: sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'sales',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  bookId: {
    type: sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'books',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  quantity: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  tableName: 'bookCategory',
  timestamps: false,
});

Book.belongsToMany(Category, {
  through: BookSale,
  foreignKey: 'bookId',
  otherKey: 'saleId',
  as: 'sales'
});

Category.belongsToMany(Book, {
  through: BookSale,
  foreignKey: 'saleId',
  otherKey: 'bookId',
  as: 'books'
});

export default BookSale;