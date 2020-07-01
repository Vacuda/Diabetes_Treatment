import { Component, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

    @Output() a1c: any;
    open: boolean;

    constructor() { }

    ngOnInit() {
        this.open = true;
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
