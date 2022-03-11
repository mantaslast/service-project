import pino from 'pino';
import config from '@/config/config';

const logger = pino({
  name: config.app.name,
  level: 'debug'
});

export default logger;
