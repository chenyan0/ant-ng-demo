import { Pipe, PipeTransform } from '@angular/core';
import { getStatusValue } from 'app/base';
@Pipe({
    name: 'status'
})

export class StatusPipe implements PipeTransform {
    transform(value: number,type?:string,defaultResult?:string): any {
        defaultResult=defaultResult || '-';
        return getStatusValue(type,value,defaultResult);
    }
}
