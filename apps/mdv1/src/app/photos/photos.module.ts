import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EditComponent} from './edit/edit.component';
import {ListPhotosComponent} from './list/list.component';
import {PhotosComponent} from './photos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';


@NgModule({
  declarations: [PhotosComponent, EditComponent, ListPhotosComponent],
  exports: [PhotosComponent, EditComponent, ListPhotosComponent],
  imports: [CommonModule, ReactiveFormsModule, MatCardModule]
})
export class PhotosModule { }
