import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VacunamPage } from './vacunam.page';

const routes: Routes = [
  {
    path: '',
    component: VacunamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacunamPageRoutingModule {}
