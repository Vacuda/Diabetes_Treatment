import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mono',
  templateUrl: './mono.component.html',
  styleUrls: ['./mono.component.css']
})
export class MonoComponent implements OnInit {

  @Input() a1c:any;
  active: boolean = false;
  open: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    if (this.a1c >= 7 && this.a1c < 9){
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
