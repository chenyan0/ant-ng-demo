import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';  
import { Routes,RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AngularEchartsModule } from 'ngx-echarts';
const routes: Routes = [
    { path: '', component: DashboardComponent },  
]

@NgModule({
    imports: [
        ShareModule,
        AngularEchartsModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [DashboardComponent],
    providers: [],
})
export class DashboardModule { }
