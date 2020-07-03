import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedBinService {

    a1c:any = 56;
    active:string = "mono";

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
