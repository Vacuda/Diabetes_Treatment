import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-metformin',
  templateUrl: './metformin.component.html',
  styleUrls: ['./metformin.component.css']
})
export class MetforminComponent implements OnInit {

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

  OnClick() {
    if (this.open === true){
      this.open = false;
    }
    else {
      this.open = true;
    }
  }

}
