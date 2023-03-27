import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { PipesModule } from '../../pipes/pipes.module';
import { SegmentPageRoutingModule } from './segment-routing.module';
import { SegmentPage } from './segment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [SegmentPage]
})
export class SegmentPageModule { }
