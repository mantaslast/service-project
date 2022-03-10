import pino from 'pino';

const logger = pino({
  name: process.env.APP_NAME,
  level: 'debug'
});

export default logger;
