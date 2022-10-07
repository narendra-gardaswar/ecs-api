import { INestApplication, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import packageJson from '../../../package.json';

function setupSwagger(app: INestApplication) {
  const logger = new Logger(setupSwagger.name);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') as number;
  const config = new DocumentBuilder()
    .setTitle(packageJson.name)
    .setDescription(packageJson.description)
    .setVersion(packageJson.version)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  logger.log(`swagger on http://localhost:${port}/docs`);
}

export default setupSwagger;
