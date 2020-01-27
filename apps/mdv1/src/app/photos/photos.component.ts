import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EditComponent } from './edit/edit.component';

interface IPhoto {
  id: string;
  url: string;
  name: string;
}

@Component({
  selector: 'mdv1-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {

  photos: IPhoto[] = [
    {
      "id": "1",
      "url": "/assets/photos/1967chevelless2.jpg",
      "name": "chevelle"
    },
    {
      "id": "2",
      "url": "/assets/photos/2017-Ford-F-150-Raptor-Baja-race-truck-cabin.jpg",
      "name": "cabin"
    },
    {
      "id": "3",
      "url":  "/assets/photos/41531201985_15847f921e_h.jpg",
      "name": "41531201985_15847f921e_h"
    },
    {
      "id": "4",
      "url":  "/assets/photos/black-rhino-york-matte-black-ford-raptor-2.jpg",
      "name": "2"
    },
    {
      "id": "5",
      "url":  "/assets/photos/edited-passenger-front-quarter.png",
      "name": "quarter"
    }
  ];

  constructor(public dialog: MatDialog) {}

  openDialog(photo: IPhoto): void {

    const dialogRef = this.dialog.open(EditComponent, {
      data: photo
    });

    dialogRef.afterClosed().subscribe(result => {
      let indx = -1;

      if(result) {
        this.photos.map(({id, url, name}, index) => {
          if(id === result.id) { indx = index; }
        });
      }

      if(indx > -1) {
        this.photos[indx] = result;
      }
    });
  }

}
