import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { CommonRoutesModule } from './common.routing';

@NgModule({
    imports: [ShareModule,CommonRoutesModule],
    exports: [],
    declarations: [LoginComponent,MainComponent],
    providers: [],
})
export class CommonModule { }
