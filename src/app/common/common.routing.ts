import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";

const routes :Routes=[
  {
    path: 'kpi', 
    component: MainComponent, 
    loadChildren: '../modules/kpi/kpi.module#KpiModule' ,
  },
  {
    path: 'dashboard', 
    component: MainComponent, 
    loadChildren: '../modules/dashboard/dashboard.module#DashboardModule' ,
  },
  { path: 'login', component: LoginComponent },
  { path: '',  redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'kpi' }
]

export const CommonRoutesModule: ModuleWithProviders = RouterModule.forChild(routes);


