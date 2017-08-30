import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ShareModule } from '../../share/share.module';  
import { MyPlanComponent } from './myplan/myplan.component';
import { PlanCheckComponent } from './plancheck/plancheck.component';
import { NormService } from "../../service/norm.service";
const routes: Routes = [
  { path: '', redirectTo:'myplan' },  
  { path: 'myplan', component: MyPlanComponent },  
  { path: 'plancheck', component: PlanCheckComponent },  
];
@NgModule({
    imports: [   
       ShareModule,
       RouterModule.forChild(routes),
    ],
    exports: [],
    declarations: [MyPlanComponent,PlanCheckComponent],
    providers: [NormService],
})
export class KpiModule { }
