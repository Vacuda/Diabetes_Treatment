import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MonoComponent } from './mono/mono.component';
import { DualComponent } from './dual/dual.component';
import { TripleComponent } from './triple/triple.component';
import { ComboComponent } from './combo/combo.component';
import { MetforminComponent } from './metformin/metformin.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { PatientComponent } from './patient/patient.component';
import { SharedBinService } from './shared-bin.service';
import { DoctorsOfficeComponent } from './doctors-office/doctors-office.component';

@NgModule({
  declarations: [
    AppComponent,
    MonoComponent,
    DualComponent,
    TripleComponent,
    ComboComponent,
    MetforminComponent,
    LifestyleComponent,
    PatientComponent,
    DoctorsOfficeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppComponent, SharedBinService],
  bootstrap: [AppComponent]
})
export class AppModule { }


