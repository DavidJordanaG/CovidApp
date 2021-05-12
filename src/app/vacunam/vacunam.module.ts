import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacunamPageRoutingModule } from './vacunam-routing.module';

import { VacunamPage } from './vacunam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VacunamPageRoutingModule
  ],
  declarations: [VacunamPage]
})
export class VacunamPageModule {}
