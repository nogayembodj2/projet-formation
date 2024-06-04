import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevWebPage } from './dev-web.page';

const routes: Routes = [
  {
    path: '',
    component: DevWebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevWebPageRoutingModule {}
