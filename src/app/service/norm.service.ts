import { Injectable } from '@angular/core';
import { Norm } from "../modules/kpi/myplan/data-model";
import { norms } from "../modules/kpi/myplan/data-model";
@Injectable()
export class NormService {

    constructor() { }
     getNorms():Promise<Norm[]>{
    
       return Promise.resolve(norms);
    }
    getNormsSlowly():Promise<Norm[]>{
       return new Promise(resolve=>{
           setTimeout(()=>{
               resolve(this.getNorms()),2000
           })
       })
    }
}