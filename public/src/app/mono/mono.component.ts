import { Component, OnInit, Input } from '@angular/core';
import { SharedBinService } from '../shared-bin.service';

@Component({
    selector: 'app-mono',
    templateUrl: './mono.component.html',
    styleUrls: ['./mono.component.css']
})
export class MonoComponent implements OnInit {

    @Input() diagnosis:any;
    
    active: boolean = false;
    open: boolean = false;

    constructor( private sharedBin: SharedBinService ) { }

    ngOnInit() {
        
    }

    ngOnChanges() {
        if(this.diagnosis.active_therapy == "mono"){
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
