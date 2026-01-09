import { Test, TestingModule } from '@nestjs/testing';
import { ClientInsightsFeedbackController } from './client-insights-feedback.controller';
import { ClientInsightsFeedbackService } from './client-insights-feedback.service';

describe('ClientInsightsFeedbackController', () => {
  let clientInsightsFeedbackController: ClientInsightsFeedbackController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ClientInsightsFeedbackController],
      providers: [ClientInsightsFeedbackService],
    }).compile();

    clientInsightsFeedbackController =
      app.get<ClientInsightsFeedbackController>(
        ClientInsightsFeedbackController,
      );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(clientInsightsFeedbackController.getHello()).toBe('Hello World!');
    });
  });
});
