import { Dialect, Sequelize } from 'sequelize';
import {
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
  DB_HOST,
  DB_DIALECT
} from './config/index';

const sequelize = new Sequelize(
  DB_NAME ?? 'test',
  DB_USERNAME ?? 'test',
  DB_PASSWORD ?? 'test',
  {
    host: DB_HOST,
    dialect: (DB_DIALECT as Dialect) || 'postgres',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

export default sequelize;
