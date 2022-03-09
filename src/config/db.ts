import { createConnection } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const connectionOptions: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
};

export default async () => {
  try {
    const connection = await createConnection(connectionOptions);
    return connection;
  } catch (error: unknown) {
    if (error instanceof Error) throw error;
    if (typeof error === 'string') throw new Error(error);
    return null;
  }
};
