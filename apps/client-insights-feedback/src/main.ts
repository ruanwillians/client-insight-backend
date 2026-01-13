import {
  initializeTelemetry,
  OtelLogger,
} from '@lib/telemetry';
initializeTelemetry('client-insights-feedback');

import { NestFactory } from '@nestjs/core';
import { ClientInsightsFeedbackModule } from './client-insights-feedback.module';

async function bootstrap() {
  const app = await NestFactory.create(ClientInsightsFeedbackModule, {
    logger: new OtelLogger(),
  });
  await app.listen(process.env.port ?? 3002);
}
bootstrap();
