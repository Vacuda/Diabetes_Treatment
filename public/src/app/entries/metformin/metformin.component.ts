import { Component, OnInit, Input } from '@angular/core';
import { SharedBinService } from '../../shared-bin.service';

@Component({
    selector: 'app-metformin',
    templateUrl: './metformin.component.html',
    styleUrls: ["../../patient/patient.component.css", './metformin.component.css']
})
export class MetforminComponent implements OnInit {

    @Input()active: boolean;
    @Input()diagnosis: any;
    open: boolean = false;
    shutdown: boolean = false;

    constructor( private sharedBin: SharedBinService ) { }

    ngOnInit() {
        // console.log("meta")
        // console.log(this.diagnosis)
    }

    ngOnChanges() {
        console.log(this.diagnosis)
        console.log(this.shutdown)
        if(this.diagnosis.is_metformin_safe == false){
            this.shutdown = true;
        }
        else{
            this.shutdown = false;
        }
        console.log(this.shutdown)

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
