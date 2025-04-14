import { Model } from 'sequelize';
import db from '.';
import sequelize from 'sequelize';
import Book from './Book';
import User from './User';

class Whishlist extends Model {
  declare bookId: number;
  declare categoryId: number;
}

Whishlist.init({
  bookId: {
    type: sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'books',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  userId: {
    type: sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
}, {
  sequelize: db,
  tableName: 'whishlists',
  timestamps: false,
});

Book.belongsToMany(User, {
  through: Whishlist,
  foreignKey: 'bookId',
  otherKey: 'userId',
  as: 'users'
});

User.belongsToMany(Book, {
  through: Whishlist,
  foreignKey: 'userId',
  otherKey: 'bookId',
  as: 'books'
});

export default Whishlist;