import { Component, OnInit, Input } from '@angular/core';
import { SharedBinService } from '../../shared-bin.service';

@Component({
    selector: 'app-metformin',
    templateUrl: './metformin.component.html',
    styleUrls: ["../../patient/patient.component.css", './metformin.component.css']
})
export class MetforminComponent implements OnInit {

    @Input()active: boolean;
    open: boolean = false;

    constructor( private sharedBin: SharedBinService ) { }

    ngOnInit() {

    }

    ngOnChanges() {
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
