import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createLogger } from './core/logger';
import initializeMiddleware from './app';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: createLogger() });
  initializeMiddleware(app);
  const logger = app.get(Logger);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  await app.listen(port);
  logger.log(`Api running on http://localhost:${port}`);
}
bootstrap();
