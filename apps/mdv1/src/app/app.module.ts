import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@30x30/material';
import { AppRoutingModule } from './app-routing.module';
import { FruitsComponent } from './fruits/fruits.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './fruits/list/list.component';
import { DetailsComponent } from './fruits/details/details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ AppComponent, FruitsComponent, ListComponent, DetailsComponent ],
  imports: [
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
