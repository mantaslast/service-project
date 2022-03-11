import { createConnection } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import config from '@/config/config';

const connectionOptions: PostgresConnectionOptions = {
  type: 'postgres',
  host: config.database.host,
  port: 5432,
  username: config.database.username,
  password: config.database.password,
  database: config.database.name
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
