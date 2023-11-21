import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IosPostPageRoutingModule } from './ios-post-routing.module';

import { IosPostPage } from './ios-post.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IosPostPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IosPostPage]
})
export class IosPostPageModule {}
