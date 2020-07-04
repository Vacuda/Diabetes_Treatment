import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedBinService {

    
    active:string = "mono";

    newly_diagnosed: boolean = true;
    have_symptoms: boolean = false;

    a1c:number = 56;
    weight_lb: number;
    weight_kg: number;
    insulin_current: number;

    cholesterol: number;
    heart_attack: boolean;
    EF: number;

    macro_album: number;
    creatinine: number;
    blood_pressure: number;
    eGFR: number;









    // a1cchange: Subject<string> = new Subject<number>();


    constructor() {}

    




    // change(){
    //     this.nameChange.next(this.name)
    // }



    // ngOnChanges() {
    //     console.log("hhehe");
    //     if (this.a1c >= 9 && this.a1c < 10){
    //         console.log("hyoyoyoyoyo");
    //         this.active = "triple";
    //     }
    //     else{
    //         this.active = "";
    //     }
    // }


}
