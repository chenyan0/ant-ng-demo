import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { CommonRoutesModule } from './common.routing';
// import { UserApi } from "../service/api/user.api";

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
@NgModule({
    imports: [ShareModule,CommonRoutesModule],
    exports: [],
    declarations: [LoginComponent,MainComponent],
    providers: [],
})
export class CommonModule { }
