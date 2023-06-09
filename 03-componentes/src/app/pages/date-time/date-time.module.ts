import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { DateTimePageRoutingModule } from './date-time-routing.module';
import { DateTimePage } from './date-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DateTimePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DateTimePage]
})
export class DateTimePageModule { }
