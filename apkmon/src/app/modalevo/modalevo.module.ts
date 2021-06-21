import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalevoPageRoutingModule } from './modalevo-routing.module';

import { ModalevoPage } from './modalevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalevoPageRoutingModule
  ],
  declarations: [ModalevoPage]
})
export class ModalevoPageModule {}
