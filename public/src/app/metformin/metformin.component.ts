import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-metformin',
    templateUrl: './metformin.component.html',
    styleUrls: ['./metformin.component.css']
})
export class MetforminComponent implements OnInit {

    @Input() active: boolean;
    open: boolean = false;

    constructor() { }

    ngOnInit() {

    }

    ngOnChanges() {
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
