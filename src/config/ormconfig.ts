import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import config from '@/config/config';

const {
  database: { type, username, password, host, name }
} = config;

const dbConfig: PostgresConnectionOptions = {
  type,
  host,
  port: 5432,
  username,
  password,
  database: name,
  entities: ['src/entity/*.ts'],
  migrationsTableName: 'migrations_table',
  migrations: ['src/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/migrations'
  },
  synchronize: false,
  migrationsRun: false
};

export default dbConfig;
