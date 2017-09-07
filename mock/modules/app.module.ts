import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { CorsMiddleware } from './cors.middlewares';
import { DelayMiddleware } from './delay.middlewares';

import { KpiController } from './kpi/kpi.controller'
import { UserController } from './user/user.controller'

@Module({
    controllers: [
    
        UserController,
      
        KpiController
    ],
})
export class ApplicationModule {
    configure(consumer: MiddlewaresConsumer) {
        consumer.apply([CorsMiddleware,DelayMiddleware]).forRoutes({
            path: '*', method: RequestMethod.ALL 
        });
    }
}