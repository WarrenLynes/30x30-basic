import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FruitsComponent } from './fruits/fruits.component';

const routes: Routes = [
  { path: '', component: FruitsComponent },
  { path: 'fruits', component: FruitsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
