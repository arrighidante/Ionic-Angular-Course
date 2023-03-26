import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ComponentsModule } from '../../components/components.module';
import { InfinitePageRoutingModule } from './infinite-routing.module';
import { InfinitePage } from './infinite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinitePageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfinitePage]
})
export class InfinitePageModule { }
