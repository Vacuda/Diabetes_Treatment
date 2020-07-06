

// All Diagnosis Logic //
// Diagnosis is sent down to the components from here //



import { Component, OnInit, Input } from '@angular/core';
import { SharedBinService } from '../shared-bin.service';

@Component({
  selector: 'app-doctors-office',
  templateUrl: './doctors-office.component.html',
  styleUrls: ['./doctors-office.component.css']
})
export class DoctorsOfficeComponent implements OnInit {

    // All Diagnosis Logic //
    // Diagnosis is sent down to the components from here //

    @Input() newly_diagnosed:boolean;
    @Input() have_symptoms:boolean;

    @Input() a1c:number;
    @Input() weight_lb:number;
    @Input() weight_kg:number;
    @Input() insulin_current:number;

    @Input() cholesterol:number;
    @Input() heart_attack:boolean;
    @Input() EF:number;

    @Input() micro_album:number;
    @Input() creatinine:number;
    @Input() blood_pressure_syst:number;
    @Input() blood_pressure_dias:number;
    @Input() eGFR:number;

    diagnosis:any = {
        active_therapy: ""
    };

    constructor( private sharedBin: SharedBinService ) { }

    ngOnInit() {
        this.main_Diagnosis_Logic();
    }
    
    ngOnChanges() {
        this.main_Diagnosis_Logic();
    }

    main_Diagnosis_Logic(){

        if(this.a1c > 7 && this.a1c < 9){
            this.diagnosis = {active_therapy:"mono"};
        }
        else if(this.a1c >= 9 && this.a1c < 10){
            this.diagnosis = {active_therapy:"dual"};
        }
        else if(this.a1c >= 10){
            this.diagnosis = {active_therapy:"triple"};
        }
        else{
            this.diagnosis = {active_therapy:"none"};
        }
    }








}
