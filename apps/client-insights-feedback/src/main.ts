import {
  initializeTelemetry,
  initializeLogging,
  OtelLogger,
} from '@app/telemetry';
initializeTelemetry('client-insights-feedback');
initializeLogging();

import { NestFactory } from '@nestjs/core';
import { ClientInsightsFeedbackModule } from './client-insights-feedback.module';

async function bootstrap() {
  const app = await NestFactory.create(ClientInsightsFeedbackModule, {
    logger: new OtelLogger(),
  });
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
