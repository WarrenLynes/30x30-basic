import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '@30x30/core';

@Component({
  selector: 'mdv1-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  currentProject: Project

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set project(value) {
    this.currentProject = {...value};
  };

  constructor() { }

  ngOnInit() {
  }

}
