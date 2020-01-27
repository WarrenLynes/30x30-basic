import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PhotosModule} from './photos/photos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@30x30/material';
import { EditComponent } from './photos/edit/edit.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    MaterialModule,
    BrowserModule,
    PhotosModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ EditComponent ]
})
export class AppModule {}
