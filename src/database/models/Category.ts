import { Model } from 'sequelize';
import db from '.';
import sequelize from 'sequelize';

class Category extends Model {
  declare id: number;
  declare name: string;
  declare description: string;
}
Category.init({
  id: {
    type: sequelize.INTEGER, 
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: sequelize.STRING,
    allowNull: false
  },
},
{
  sequelize: db,
  tableName: 'category',
  timestamps: false,
});

export default Category;