import { Middleware, NestMiddleware } from '@nestjs/common'; 

@Middleware()
export class CorsMiddleware implements NestMiddleware {
  constructor() { }

  resolve() {
    return (req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
      res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
      res.header("X-Powered-By", ' 3.2.1')  
      res.header("Content-Type", "application/json;charset=utf-8"); 
      next();  
    } 
  }
}