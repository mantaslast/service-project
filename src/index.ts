import { Server } from 'http';
import app from '@/app';
import setupDatabase from '@/config/db';
import logger from '@/utils/logger';
import { unexpectedErrorHandler, handleSigTerm } from '@/helpers/serverErrors';

let server: Server;

const main = async () => {
  /**
   * Setup database
   */
  await setupDatabase();
  logger.info('Database is up and running');
  server = app.listen(process.env.PORT || 3000, () => {
    logger.info(`Server started on port ${process.env.PORT || 3000}`);
  });

  /**
   * These should handle errors outside of express errors (DB setup, Env variable issues etc.)
   */
  process.on('uncaughtException', unexpectedErrorHandler(server));
  process.on('unhandledRejection', unexpectedErrorHandler(server));
  process.on('SIGTERM', handleSigTerm(server));
};

main();
