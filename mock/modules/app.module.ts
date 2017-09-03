import { Module, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { CorsMiddleware } from './cors.middlewares';
import { DelayMiddleware } from './delay.middlewares';
import { GithubController } from './github/github.controller';
import { TagIPController } from './assets/tag-ip.controller';
import { TagURLController } from './assets/tag-url.controller';
import { UserController } from './setting/user.controller';
import { RoleController } from './setting/role.controller';
import { TaskController } from './task/task.controller';
import { ThreatenController } from './threaten/threaten.controller';
import { WeakPasswordController } from './threaten/weak-password.controller';
import { KpiController } from './kpi/kpi.controller'

@Module({
    controllers: [
        GithubController,
        TagIPController,
        TagURLController,
        UserController,
        RoleController, 
        TaskController,
        ThreatenController,
        WeakPasswordController,
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