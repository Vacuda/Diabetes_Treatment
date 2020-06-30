import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-combo',
    templateUrl: './combo.component.html',
    styleUrls: ['./combo.component.css']
})
export class ComboComponent implements OnInit {

    @Input() a1c:any;
    active: boolean = false;
    open: boolean = false;

    constructor() { }

    ngOnInit() {

    }

    ngOnChanges() {
        if (this.a1c >= 10){
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
