import { Middleware, NestMiddleware } from '@nestjs/common';

@Middleware()
export class DelayMiddleware implements NestMiddleware {
  constructor() { }

  resolve() {
    return (req, res, next) => {
      setTimeout(function () {
        next();
      }, 500);  
    }
  }
}