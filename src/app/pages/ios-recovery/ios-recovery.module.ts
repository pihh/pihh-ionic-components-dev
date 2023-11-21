import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IosRecoveryPageRoutingModule } from './ios-recovery-routing.module';

import { IosRecoveryPage } from './ios-recovery.page';
import { ComponentsModule } from 'src/app/components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IosRecoveryPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IosRecoveryPage]
})
export class IosRecoveryPageModule {}
