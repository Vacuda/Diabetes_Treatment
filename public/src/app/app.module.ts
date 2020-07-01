import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
// import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';
import { MonoComponent } from './mono/mono.component';
import { DualComponent } from './dual/dual.component';
import { TripleComponent } from './triple/triple.component';
import { ComboComponent } from './combo/combo.component';
import { MetforminComponent } from './metformin/metformin.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { PatientComponent } from './patient/patient.component';
// import { ShowComponent } from './show/show.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }


