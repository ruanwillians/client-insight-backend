import { Module } from '@nestjs/common';
import { initializeTelemetry } from './telemetry.tracing';
import { AppLogger } from './telemetry.logger';

@Module({
  providers: [],
  exports: [
    initializeTelemetry,
    AppLogger
  ],
})
export class TelemetryModule { }
