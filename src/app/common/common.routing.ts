import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { MyPlanComponent } from "../modules/myplan/myplan.component";
import { PlanCheckComponent } from "../modules/plancheck/plancheck.component";
const routes :Routes=[
  {
    path: 'kpi',
    component: MainComponent, 
    children: [{
      path: '',
      children: [
          { path: '', redirectTo: 'myplan', pathMatch: 'full' },  
          { path: 'myplan', component: MyPlanComponent },
          { path: 'plancheck', component: PlanCheckComponent },
      ]
      }
    ]  
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'kpi', pathMatch: 'full' }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CommonRoutesModule { }
// export const routing: ModuleWithProviders = RouterModule.forChild(routes);


