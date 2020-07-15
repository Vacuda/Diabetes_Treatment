import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedBinService {

    newly_diagnosed: boolean = true;
    have_symptoms: boolean = false;

    a1c:number = 7.0;
    weight_lb: number = 0;
    weight_kg: number = 0;
    age:number;
    insulin_current: number;

    cholesterol: number;
    heart_attack: boolean = false;
    EF: number;

    micro_album: number;
    creatinine: number;
    blood_pressure_syst: number = 120;
    blood_pressure_dias: number = 80;
    eGFR: number;

    metformin_dosage: number = 850;

    constructor() {}

}
