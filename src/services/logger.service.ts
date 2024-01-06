import dayjs from 'dayjs';
import { configure, getLogger } from 'log4js';

const path = process.env.NODE_ENV === 'production' ? process.env.LOGS_PATH : 'logs/';
const numBackups = process.env.NODE_ENV === 'production' ? process.env.LOGS_NUMBER : 30;

configure({
  pm2: true,
  disableClustering: true,
  appenders: {
    application: {
      type: 'dateFile',
      filename: `${path}application.log`,
      pattern: 'dd-MM-yyyy',
      encoding: 'utf8',
      keepFileExt: true,
      numBackups,
      compress: true,
    },
  },
  categories: { default: { appenders: ['application'], level: 'all' } },
});

const logger = getLogger('application');

const getTime = () => {
  return dayjs().format('DD-MM-YYYY HH:mm:ss')
}

export class LoggerService {
  private static instance: LoggerService;

  public static getInstance(): LoggerService {
    if (!LoggerService.instance) {
      LoggerService.instance = new LoggerService();
    }

    return LoggerService.instance;
  }

  /**
   * Write a 'info' level log.
   */
  public info(message: string) {
    // logger.info(`${message}`);
    const log = `[${getTime()}] [INFO] ${message} `;
    // eslint-disable-next-line no-console
    console.log('\u001B[32m', log);
  }

  /**
   * Write a 'log' level log.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public log(message: string, context: any) {
    if (context instanceof Object && Object.prototype.constructor.length > 0) {
      context = JSON.stringify(context);
    }

    // logger.log(`${message} ${context}`);
    const log = `[${getTime()}] [LOG] [${context}] ${message} `;
    // eslint-disable-next-line no-console
    console.log('\u001B[37m', log);
  }

  /**
   * Write an 'error' level log.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public error(message: string, context: any) {
    if (context instanceof Object && Object.prototype.constructor.length > 0) {
      context = JSON.stringify(context);
    }

    const log = `[${getTime()}] [ERROR] ${message} ${context}`;
    // logger.error(`${message} ${context}`);
    // eslint-disable-next-line no-console
    console.log('\u001B[31m', log);
    // eslint-disable-next-line no-console
    console.trace();
  }

  /**
   * Write a 'warn' level log.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public warn(message: string, context: any) {
    if (context instanceof Object && Object.prototype.constructor.length > 0) {
      context = JSON.stringify(context);
    }

    const log = `[${getTime()}] [WARN] ${message} ${context}`;
    // logger.warn(`${message} ${context}`);
    // eslint-disable-next-line no-console
    console.log('\u001B[33m', log);
  }

  /**
   * Write a 'debug' level log.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public debug(message: string, context: any) {
    if (context instanceof Object && Object.prototype.constructor.length > 0) {
      context = JSON.stringify(context);
    }

    const log = `[${getTime()}] [DEBUG] ${message} ${context}`;
    // logger.debug(`${message} ${context}`);
    // eslint-disable-next-line no-console
    console.log('\u001B[36m', log);
  }
}
