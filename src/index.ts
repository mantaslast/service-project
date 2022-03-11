import { Server } from 'http';
import app from '@/app';
import setupDatabase from '@/config/db';
import logger from '@/utils/logger';
import { unexpectedErrorHandler, handleSigTerm } from '@/helpers/serverErrors';
import config from '@/config/config';

let server: Server;

const main = async () => {
  /**
   * Setup database
   */
  await setupDatabase();
  logger.info('Database is up and running');
  server = app.listen(config.app.port, () => {
    logger.info(`Server started on port ${config.app.port}`);
  });

  /**
   * These should handle errors outside of express errors (DB setup, Env variable issues etc.)
   */
  process.on('uncaughtException', unexpectedErrorHandler(server));
  process.on('unhandledRejection', unexpectedErrorHandler(server));
  process.on('SIGTERM', handleSigTerm(server));
};

main();
