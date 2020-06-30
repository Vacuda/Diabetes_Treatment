import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-triple',
    templateUrl: './triple.component.html',
    styleUrls: ['./triple.component.css']
})
export class TripleComponent implements OnInit {

    @Input() a1c:any;
    active: boolean = false;
    open: boolean = false;

    constructor() { }

    ngOnInit() {

    }

    ngOnChanges() {
        if (this.a1c >= 9 && this.a1c < 10){
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
