import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IosPostPage } from './ios-post.page';

const routes: Routes = [
  {
    path: '',
    component: IosPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IosPostPageRoutingModule {}
