import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.css']
})
export class LifestyleComponent implements OnInit {

    @Input() active:boolean;
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