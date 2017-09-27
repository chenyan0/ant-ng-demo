import { NgModule } from '@angular/core';
import { Routes,RouterModule } from "@angular/router";
import { ShareModule } from '../../share/share.module';  
import { FillComponent } from './pages/fill/fill.component';
const routes:Routes=[
    {path:'',redirectTo:'fill'},
    {path:'fill',component:FillComponent}
];
const COMPONENT=[FillComponent];
@NgModule({
    imports: [
         ShareModule,
       RouterModule.forChild(routes),
    ],
    exports: [],
    declarations: [COMPONENT],
    providers: [],
})
export class ReportModule { }
