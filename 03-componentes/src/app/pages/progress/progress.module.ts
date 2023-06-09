import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { ProgressPageRoutingModule } from './progress-routing.module';
import { ProgressPage } from './progress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ProgressPage]
})
export class ProgressPageModule { }
