import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VacunesPage } from './vacunes.page';

const routes: Routes = [
  {
    path: '',
    component: VacunesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacunesPageRoutingModule {}
