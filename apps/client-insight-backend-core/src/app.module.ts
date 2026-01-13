import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OtelLogger } from '@lib/telemetry';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, OtelLogger],
})
export class AppModule { }
