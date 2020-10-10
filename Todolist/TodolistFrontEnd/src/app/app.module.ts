import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllviewComponent } from './allview/allview.component';
import { DetailviewComponent } from './allview/detailview/detailview.component';
import { AddviewComponent } from './addview/addview.component';

@NgModule({
  declarations: [
    AppComponent,
    AllviewComponent,
    DetailviewComponent,
    AddviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
