import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
// import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
// import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // ShowComponent
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


