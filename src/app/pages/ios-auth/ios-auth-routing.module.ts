import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IosAuthPage } from './ios-auth.page';

const routes: Routes = [
  {
    path: '',
    component: IosAuthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IosAuthPageRoutingModule {}
