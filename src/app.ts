import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import setupSwagger from './core/swagger/swagger';
import helmet from 'helmet';
import morgan from 'morgan';
import { Reflector } from '@nestjs/core';
import { AuthService } from './shared/auth/auth.service';
import { ApiGuard } from './shared/guards/api.guard';

function getHttpLogger(logger: Logger) {
  const options = {
    stream: {
      write(str: string) {
        logger.log(str);
      },
    },
  };
  const format = process.env.NODE_ENV === 'development' ? 'tiny' : 'combined';
  return morgan(format, options);
}

function setup(app: INestApplication) {
  const logger = app.get(Logger);
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  app.use(getHttpLogger(logger));
  setupSwagger(app);
  const reflector = app.get(Reflector);
  const authService = app.get(AuthService);
  app.useGlobalGuards(new ApiGuard(reflector, authService));
}

export default setup;
