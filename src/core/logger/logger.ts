import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import * as winston from 'winston';
import packageJson from '../../../package.json';

function getTransports() {
  const transports = [];
  const consoleFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.ms(),
    nestWinstonModuleUtilities.format.nestLike(packageJson.name, {
      prettyPrint: true,
    }),
  );
  const console = new winston.transports.Console({ format: consoleFormat });
  transports.push(console);
  return transports;
}

export function createLogger() {
  const transports = getTransports();
  const logger = WinstonModule.createLogger({ transports });
  return logger;
}
