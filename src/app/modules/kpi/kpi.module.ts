import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {  StatusPipe } from "../../pipes/plan-status.pipe";
import { ShareModule } from '../../share/share.module';  
import { MyPlanComponent } from './pages/myplan/myplan.component';
import { PlanCheckComponent } from './pages/plancheck/plancheck.component';
import { CheckDeatilComponent } from './pages/plancheck/check-detail.component';
import { ModalOperateNormComponent } from "./modals/modal-operate-norm/modal-operate-norm.component";
const routes: Routes = [
  { path: '', redirectTo:'myplan' },  
  { path: 'myplan', component: MyPlanComponent },  
  { path: 'plancheck',component: PlanCheckComponent },  
  { path: 'check-detail/:id',component: CheckDeatilComponent },  
];
const MODALS = [ModalOperateNormComponent];
const COMPONENTS=[MyPlanComponent,PlanCheckComponent,ModalOperateNormComponent,CheckDeatilComponent,StatusPipe];
@NgModule({
    imports: [        
       ShareModule,
       RouterModule.forChild(routes),
    ],
    exports: [MODALS],
    entryComponents: [MODALS],
    declarations: [COMPONENTS],
    providers: [],
})
export class KpiModule { }
