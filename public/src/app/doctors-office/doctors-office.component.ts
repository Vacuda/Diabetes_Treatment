

// All Diagnosis Logic //
// Diagnosis is sent down to the components from here //



import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
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
    
    ngOnChanges(changes:any) {
        this.weight_conversion(changes);
        this.main_Diagnosis_Logic();
    }

    main_Diagnosis_Logic(){
        
        console.log("shared" + this.sharedBin.weight_kg);
        console.log("direct" + this.weight_kg);

        if(this.newly_diagnosed == true && this.a1c){

            this.diagnosis = {active_therapy:"mono"};
        }




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

    //2.2046226218 lb in 1 kilogram
    weight_conversion(changes:any){
        // if kg was changed, change lb
        if(changes.weight_kg){
            var converted_to_lb = Math.round(2.2046226218 * changes.weight_kg.currentValue);
            //checks if needed first.  Infinite loop would happen without
            if(this.sharedBin.weight_lb != converted_to_lb){
                this.sharedBin.weight_lb = converted_to_lb;
            }
        }
        // if lb was changed, change kg
        if(changes.weight_lb){
            var converted_to_kg = Math.round(changes.weight_lb.currentValue / 2.2046226218);
            //checks if needed first.  Infinite loop would happen without
            if(this.sharedBin.weight_kg != converted_to_kg){
                this.sharedBin.weight_kg = converted_to_kg;
            }
        }
    }








}
