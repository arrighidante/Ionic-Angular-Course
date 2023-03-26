import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { ModalInfoPageRoutingModule } from './modal-info-routing.module';
import { ModalInfoPage } from './modal-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalInfoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ModalInfoPage]
})
export class ModalInfoPageModule { }
