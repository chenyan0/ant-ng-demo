import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { lhttpMockProvide, lhttpProvide } from 'app/base';
import { environment } from 'environments/environment';
import { API_SERVICE } from './api';
const HTTP = lhttpProvide;

@NgModule({
    imports: [HttpModule, JsonpModule],
    exports: [],
    declarations: [],
    providers: [HTTP,API_SERVICE],
})
export class ServiceModule { }
