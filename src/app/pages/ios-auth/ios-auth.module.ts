import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IosAuthPageRoutingModule } from './ios-auth-routing.module';

import { IosAuthPage } from './ios-auth.page';
import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IosAuthPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IosAuthPage]
})
export class IosAuthPageModule {}
