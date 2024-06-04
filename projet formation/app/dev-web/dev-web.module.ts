import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevWebPageRoutingModule } from './dev-web-routing.module';

import { DevWebPage } from './dev-web.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevWebPageRoutingModule
  ],
  declarations: [DevWebPage]
})
export class DevWebPageModule {}
