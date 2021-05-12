import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacunesPageRoutingModule } from './vacunes-routing.module';

import { VacunesPage } from './vacunes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VacunesPageRoutingModule
  ],
  declarations: [VacunesPage]
})
export class VacunesPageModule {}
