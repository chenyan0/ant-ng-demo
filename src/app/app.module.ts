import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttpClientModule} from "@angular/common/http";
import { CommonModule } from './common/common.module';
import { ServiceModule } from "app/service";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    ServiceModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),  
NgZorroAntdModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }