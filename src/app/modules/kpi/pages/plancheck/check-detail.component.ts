import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
@Component({
    selector: 'check-detail',
    templateUrl: 'check-detail.component.html'
})

export class CheckDeatilComponent implements OnInit {
    id=this.route.snapshot.params["id"];
    item:{};
    constructor(
        private http:HttpClient,
        private route:ActivatedRoute
    ) {}

    ngOnInit() { 
        //  this.http.getItem().subscribe(()=>{

        //  })
    }
}