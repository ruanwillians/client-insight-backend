import { initializeTelemetry, AppLogger } from '@lib/telemetry';
initializeTelemetry('client-insight-backend-core');

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new AppLogger(),
  });
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
