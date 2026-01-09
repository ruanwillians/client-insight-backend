import { Controller, Get } from '@nestjs/common';
import { ClientInsightsFeedbackService } from './client-insights-feedback.service';

@Controller()
export class ClientInsightsFeedbackController {
  constructor(
    private readonly clientInsightsFeedbackService: ClientInsightsFeedbackService,
  ) {}

  @Get()
  getHello(): string {
    return this.clientInsightsFeedbackService.getHello();
  }
}
