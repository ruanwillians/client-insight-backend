import { initializeTelemetry, AppLogger } from '@lib/telemetry';
import { NestFactory } from '@nestjs/core';
import { ClientInsightsFeedbackModule } from './client-insights-feedback.module';
initializeTelemetry('client-insights-feedback');

async function bootstrap() {
  const app = await NestFactory.create(ClientInsightsFeedbackModule, {
    logger: new AppLogger(),
  });
  await app.listen(process.env.port ?? 3002);
}
bootstrap();
