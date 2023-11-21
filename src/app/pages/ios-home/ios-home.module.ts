import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IosHomePageRoutingModule } from './ios-home-routing.module';

import { IosHomePage } from './ios-home.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IosHomePageRoutingModule,
    ComponentsModule
  ],
  declarations: [IosHomePage]
})
export class IosHomePageModule {}
