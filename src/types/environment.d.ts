import { Dialect } from 'sequelize/types';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT: number;
      DB_USERNAME: string;
      DB_PASSWORD: string;
      DB_NAME: string;
      DB_HOST: string;
      DB_DIALECT: Dialect;
    }
  }
}

export {};
