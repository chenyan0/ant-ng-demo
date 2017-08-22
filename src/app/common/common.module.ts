import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { CommonRoutesModule } from './common.routing';
import { MyPlanComponent } from "../modules/myplan/myplan.component";
import { PlanCheckComponent } from "../modules/plancheck/plancheck.component";
@NgModule({
    imports: [ShareModule,CommonRoutesModule],
    exports: [],
    declarations: [LoginComponent,MainComponent,MyPlanComponent,PlanCheckComponent],
    providers: [],
})
export class CommonModule { }
