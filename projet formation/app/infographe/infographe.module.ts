import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfographePageRoutingModule } from './infographe-routing.module';

import { InfographePage } from './infographe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfographePageRoutingModule
  ],
  declarations: [InfographePage]
})
export class InfographePageModule {}
