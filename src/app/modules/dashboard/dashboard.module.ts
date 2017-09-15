import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AngularEchartsModule } from 'ngx-echarts';
const routes: Routes = [
    { path: '', component: DashboardComponent },  
]

@NgModule({
    imports: [
        AngularEchartsModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [DashboardComponent],
    providers: [],
})
export class DashboardModule { }
