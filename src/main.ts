import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const port = 3000;

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  logger.log(`Application listening on port ${port}`);
}
bootstrap();
