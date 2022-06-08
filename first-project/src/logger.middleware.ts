import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');
  use(req: Request, res: Response, next: NextFunction) {
    /** Event */
    // response가 등록이 완료가 되면 event 발생
    res.on('finish', () => {
      this.logger.log(
        `${req.ip}, ${req.originalUrl}, ${req.method} ${res.statusCode}`,
      );
    });
    next();
  }
}
