import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mdv1-photos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListPhotosComponent implements OnInit {

  @Input() data: [{
    id: string,
    url: string,
    name: string
  }];

  @Output() editPhoto = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onEdit(photo: {url: string, name: string, id: string}) {
    this.editPhoto.emit(photo);
  }

}
