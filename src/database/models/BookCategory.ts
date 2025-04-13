import { Model } from 'sequelize';
import db from '.';
import sequelize from 'sequelize';
import Book from './Book';
import Category from './Category';

class BookCategory extends Model {
  declare bookId: number;
  declare categoryId: number;
}

BookCategory.init({
  bookId: {
    type: sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'books',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  categoryId: {
    type: sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'category',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
}, {
  sequelize: db,
  tableName: 'bookCategory',
  timestamps: false,
});

Book.belongsToMany(Category, {
  through: BookCategory,
  foreignKey: 'bookId',
  otherKey: 'categoryId',
  as: 'categories'
});

Category.belongsToMany(Book, {
  through: BookCategory,
  foreignKey: 'categoryId',
  otherKey: 'bookId',
  as: 'books'
});

export default BookCategory;