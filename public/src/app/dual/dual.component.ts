import { Component, OnInit } from '@angular/core';
import { SharedBinService } from '../shared-bin.service';

@Component({
    selector: 'app-dual',
    templateUrl: './dual.component.html',
    styleUrls: ['./dual.component.css']
})
export class DualComponent implements OnInit {

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
