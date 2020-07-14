import { Component, OnInit, Input } from '@angular/core';
import { SharedBinService } from '../../shared-bin.service';

@Component({
    selector: 'app-combo',
    templateUrl: './combo.component.html',
    styleUrls: ['./combo.component.css']
})
export class ComboComponent implements OnInit {

    @Input() diagnosis:any;
    
    active: boolean = false;
    open: boolean = false;

    constructor( private sharedBin: SharedBinService ) { }

    ngOnInit() {

    }

    ngOnChanges() {
        if(this.diagnosis.active_therapy == "combo"){
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
