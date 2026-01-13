import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { OtelLogger } from '@lib/telemetry';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logger: OtelLogger,
  ) {}

  @Get()
  getHello(): string {
    this.logger.log('Hello World!');
    return this.appService.getHello();
  }
}
