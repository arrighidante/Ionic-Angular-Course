import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PipesModule } from '../../pipes/pipes.module';
import { SearchPageRoutingModule } from './search-routing.module';
import { SearchPage } from './search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    PipesModule
  ],
  declarations: [SearchPage]
})
export class SearchPageModule { }
