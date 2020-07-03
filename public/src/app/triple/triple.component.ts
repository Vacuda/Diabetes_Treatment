import { Component, OnInit } from '@angular/core';
import { SharedBinService } from '../shared-bin.service';

@Component({
    selector: 'app-triple',
    templateUrl: './triple.component.html',
    styleUrls: ['./triple.component.css']
})
export class TripleComponent implements OnInit {

    active: boolean = false;
    open: boolean = false;

    constructor( private sharedBin: SharedBinService ) { }

    ngOnInit() {

    }

    ngOnChanges() {
        // if (this.a1c >= 9 && this.a1c < 10){
        // this.active = true;
        // }
        // else{
        // this.active = false;
        // }
    }

    //open - close
    OnClick() {
        if (this.open === true){
        this.open = false;
        }
        else {
        this.open = true;
        }
    }

}
