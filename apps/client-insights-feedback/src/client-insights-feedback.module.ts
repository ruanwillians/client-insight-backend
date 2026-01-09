import { Module } from '@nestjs/common';
import { ClientInsightsFeedbackController } from './client-insights-feedback.controller';
import { ClientInsightsFeedbackService } from './client-insights-feedback.service';

@Module({
  imports: [],
  controllers: [ClientInsightsFeedbackController],
  providers: [ClientInsightsFeedbackService],
})
export class ClientInsightsFeedbackModule {}
