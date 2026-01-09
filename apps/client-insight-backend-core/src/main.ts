import {
  initializeTelemetry,
  initializeLogging,
  OtelLogger,
} from '@app/telemetry';
initializeTelemetry('client-insight-backend-core');
initializeLogging();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new OtelLogger(),
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
