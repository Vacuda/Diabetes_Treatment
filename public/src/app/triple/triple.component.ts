import { Component, OnInit, Input } from '@angular/core';
import { SharedBinService } from '../shared-bin.service';

@Component({
    selector: 'app-triple',
    templateUrl: './triple.component.html',
    styleUrls: ['./triple.component.css']
})
export class TripleComponent implements OnInit {

    @Input() diagnosis:any;
    
    active: boolean = false;
    open: boolean = false;

    constructor( private sharedBin: SharedBinService ) { }

    ngOnInit() {

    }

    ngOnChanges() {
        if(this.diagnosis.active_therapy == "triple"){
            this.active = true;
        }
        else{
            this.active = false;
        }
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
