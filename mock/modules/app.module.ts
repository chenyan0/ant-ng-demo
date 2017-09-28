import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { CorsMiddleware } from './cors.middlewares';
import { DelayMiddleware } from './delay.middlewares';

import { KpiCheckController } from './kpi/kpicheck.controller'
import { KpiPlanController } from './kpi/kpiplan.controller'
import { UserController } from './user/user.controller'
import { FillReportController } from './report/report-fill.controller'

@Module({
    controllers: [
        UserController,
        KpiCheckController,
        KpiPlanController,
        FillReportController
    ],
})
export class ApplicationModule {
    configure(consumer: MiddlewaresConsumer) {
        consumer.apply([CorsMiddleware, DelayMiddleware]).forRoutes({
            path: '*', method: RequestMethod.ALL
        });
    }
}