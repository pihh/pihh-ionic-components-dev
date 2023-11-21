import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IosRecoveryPage } from './ios-recovery.page';

const routes: Routes = [
  {
    path: '',
    component: IosRecoveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IosRecoveryPageRoutingModule {}
