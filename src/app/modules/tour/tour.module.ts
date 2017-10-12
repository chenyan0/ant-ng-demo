import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ShareModule } from '../../share/share.module';  
import { MarkComponent } from './pages/mark/mark.component';
const routes:Routes=[
    {path:'',redirectTo:'mark'},
    {path:'mark',component:MarkComponent},
];
const COMPONENT=[MarkComponent];
@NgModule({
    imports: [
       ShareModule,
       RouterModule.forChild(routes),
    ],
    exports: [RouterModule],   
    declarations: [COMPONENT],
    providers: [],
})
export class TourModule { }
