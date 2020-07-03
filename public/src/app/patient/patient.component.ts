import { Component, OnInit, Input } from '@angular/core';
import { SharedBinService } from '../shared-bin.service';


@Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

    open: boolean;

    constructor( private sharedBin: SharedBinService ) { }

    ngOnInit() {
        this.open = true;
    }
    
    ngOnChanges(){
        
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
