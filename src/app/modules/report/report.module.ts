import { NgModule } from '@angular/core';
import { Routes,RouterModule } from "@angular/router";
import { ShareModule } from '../../share/share.module';  
import { ComponentModule } from "app/components/component.module";

import { FillComponent } from './pages/fill/fill.component';

const routes:Routes=[
    {path:'',redirectTo:'fill'},
    {path:'fill',component:FillComponent}
];
const COMPONENTS=[FillComponent];
@NgModule({
    imports: [
         ShareModule,
         ComponentModule,
       RouterModule.forChild(routes),
    ],
    exports: [RouterModule],
    declarations: [COMPONENTS],
    providers: [],
})
export class ReportModule { }
