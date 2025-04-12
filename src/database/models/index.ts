import { Sequelize } from 'sequelize';
import * as config from '../config/database';

export const sequelize = new Sequelize(config);