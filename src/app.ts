import express from 'express';
import xss from 'xss-clean';
import helmet from 'helmet';
import expressPinoLogger from 'express-pino-logger';
import routers from '@/routes';
import logger from '@/utils/logger';

const app = express();

/**
 * Request body parsing setup
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Security setup
 */
app.use(xss());
app.use(helmet());

/**
 * Logging setup
 */
app.use(expressPinoLogger({ logger }));

/**
 * Setup routes
 */
app.use(...routers);

/**
 * Not found page
 */
app.get('*', (req, res) => {
  res.status(404).send('Invalid URL');
});

export default app;
