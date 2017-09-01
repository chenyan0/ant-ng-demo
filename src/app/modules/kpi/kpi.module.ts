import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ShareModule } from '../../share/share.module';  
import { MyPlanComponent } from './pages/myplan/myplan.component';
import { PlanCheckComponent } from './pages/plancheck/plancheck.component';
import { NormService } from "../../service/norm.service";
import { ModalOperateNormComponent } from "./modals/modal-operate-norm/modal-operate-norm.component";
const routes: Routes = [
  { path: '', redirectTo:'myplan' },  
  { path: 'myplan', component: MyPlanComponent },  
  { path: 'plancheck', component: PlanCheckComponent },  
];
const MODALS = [ModalOperateNormComponent];
@NgModule({
    imports: [        
       ShareModule,
       RouterModule.forChild(routes),
    ],
    exports: [MODALS],
    entryComponents: [MODALS],
    declarations: [MyPlanComponent,PlanCheckComponent,ModalOperateNormComponent],
    providers: [NormService],
})
export class KpiModule { }
