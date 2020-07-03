import { Component, OnInit } from '@angular/core';
import { SharedBinService } from '../shared-bin.service';

@Component({
    selector: 'app-mono',
    templateUrl: './mono.component.html',
    styleUrls: ['./mono.component.css']
})
export class MonoComponent implements OnInit {

    active:boolean;

    open: boolean = false;

    constructor( private sharedBin: SharedBinService ) { }

    ngOnInit() {
        this.active = true;
    }

    ngOnChanges() {
        // if (this.a1c >= 7 && this.a1c < 9){
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
