import { createConnection } from 'typeorm';
import dbConfig from '@/config/ormconfig';

export default async () => {
  try {
    const connection = await createConnection(dbConfig);
    return connection;
  } catch (error: unknown) {
    if (error instanceof Error) throw error;
    if (typeof error === 'string') throw new Error(error);
    return null;
  }
};
