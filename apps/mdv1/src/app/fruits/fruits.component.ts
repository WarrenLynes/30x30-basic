import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { Project, ProjectsService } from '@30x30/core';

@Component({
  selector: 'mdv1-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {

  selectedFruit: Project;
  fruits$: Observable<any>;

  constructor(private service: ProjectsService) { }

  ngOnInit() {
    this.getFruits();
  }

  resetFruit() {
    this.selectedFruit = null;
  }

  getFruits() {
    this.fruits$ = this.service.all();
  }

  selectFruit(fruit: Project) {
    this.selectedFruit = fruit;
  }

  deleteFruit(fruit) {
    this.service.delete(fruit.id).subscribe(() => {
      this.getFruits();
      this.resetFruit();
    });
  }

  saveFruit(fruit) {
    if (!fruit.id) {
      this.createProject(fruit);
    } else {
      this.updateProject(fruit);
    }
  }

  createProject(fruit) {
    this.service.create(fruit).subscribe(() => {
      this.getFruits();
      this.resetFruit();
    });
  }

  updateProject(fruit) {
    this.service.update(fruit).subscribe(() => {
      this.getFruits();
      this.resetFruit();
    });
  }

  cancel() {
    this.resetFruit();
  }
}
