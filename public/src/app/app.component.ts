import { Component, ChangeDetectorRef } from '@angular/core';
import { SharedBinService } from './shared-bin.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor( private sharedBin: SharedBinService, private cd: ChangeDetectorRef){}

    //this evaluates the changes again, for this parent component, because some values are changed herewithin(removes an error)
    ngAfterViewInit(){
        this.cd.detectChanges();
    }

}
