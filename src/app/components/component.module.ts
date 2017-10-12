import { NgModule } from '@angular/core';
import { ShareModule } from 'app/share/share.module';  
import { BtnUploadComponent } from "app/components/btn-upload/btn-upload.componnet";
@NgModule({
    imports: [ShareModule],
    exports: [BtnUploadComponent],
    declarations: [BtnUploadComponent],
    providers: [],
})
export class ComponentModule { }
