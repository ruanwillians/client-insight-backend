import { ConsoleLogger, Injectable } from '@nestjs/common';
import { logs, SeverityNumber } from '@opentelemetry/api-logs';

@Injectable()
export class AppLogger extends ConsoleLogger {
  private otelLogger: ReturnType<typeof logs.getLogger>;

  constructor(context?: string) {
    super();
    if (context) {
      this.context = context;
    }
    this.otelLogger = logs.getLogger(context ?? 'OtelLogger');
  }

  log(message: string, context?: string) {
    super.log(message, context);
    this.emitOtelLog(SeverityNumber.INFO, message, context);
  }

  error(message: string, stack?: string, context?: string) {
    super.error(message, stack, context);
    this.emitOtelLog(SeverityNumber.ERROR, message, context, {
      stack: stack || '',
    });
  }

  warn(message: string, context?: string) {
    super.warn(message, context);
    this.emitOtelLog(SeverityNumber.WARN, message, context);
  }

  debug(message: string, context?: string) {
    super.debug(message, context);
    this.emitOtelLog(SeverityNumber.DEBUG, message, context);
  }

  verbose(message: string, context?: string) {
    super.verbose(message, context);
    this.emitOtelLog(SeverityNumber.TRACE, message, context);
  }

  private emitOtelLog(
    severityNumber: SeverityNumber,
    message: string,
    context?: string,
    attributes?: Record<string, string>,
  ) {
    const logContext = context || this.context;
    this.otelLogger.emit({
      severityNumber,
      body: String(message),
      attributes:
        attributes && Object.keys(attributes).length > 0
          ? {
            ...attributes,
            context: logContext,
          }
          : { context: logContext },
    });
  }
}
