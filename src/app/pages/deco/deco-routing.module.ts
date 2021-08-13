import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecoComponent } from './deco.component';

const routes: Routes = [
  { path: '', component: DecoComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DecoRoutingModule { }
