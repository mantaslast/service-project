import app from '@/app';
import setupDatabase from '@/config/db';
import logger from '@/utils/logger';

const main = async () => {
  /**
   * Setup database
   */
  await setupDatabase();
  logger.info('Database is up and running');
  app.listen(process.env.PORT || 3000, () => {
    logger.info(`Server started on port ${process.env.PORT || 3000}`);
  });
};

main();
