import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientInsightsFeedbackService {
  getHello(): string {
    return 'Hello World!';
  }
}
