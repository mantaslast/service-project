import { Server } from 'http';
import logger from '@/utils/logger';

const exitHandler = (server: Server) => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

export const unexpectedErrorHandler = (server: Server) => (error: Error) => {
  logger.error(error);
  exitHandler(server);
};

export const handleSigTerm = (server: Server) => () => {
  logger.info('SIGTERM received');
  exitHandler(server);
};
