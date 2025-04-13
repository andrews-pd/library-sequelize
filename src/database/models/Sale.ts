import { Model } from 'sequelize';
import db from '.';
import sequelize from 'sequelize';
import User from './User';

class Sale extends Model {
  declare id: number;
  declare userId: number;
  declare totalPrice: number;
  declare date: string;
}

Sale.init({
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  totalPrice: {
    type: sequelize.INTEGER,
    allowNull: false,
  },
  date: {
    type: sequelize.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  tableName: 'sales',
  timestamps: false,
});

Sale.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
});

export default Sale;