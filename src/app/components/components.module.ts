import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IconLoadingComponent } from './icons/icon-loading/icon-loading.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { IconMenuDoubleComponent } from './icons/icon-menu-double/icon-menu-double.component';
import { HeaderUserComponent } from './header/header-user/header-user.component';
import { IconBackComponent } from './icons/icon-back/icon-back.component';
import { ButtonBackComponent } from './buttons/button-back/button-back.component';
import { HeaderBackComponent } from './header/header-back/header-back.component';

const declarations:any[] = [
  // Icons
  IconLoadingComponent,
  IconMenuDoubleComponent,
  IconBackComponent,

  // Buttons
  ButtonBackComponent,

  // Header
  HeaderUserComponent,
  HeaderBackComponent,

  // Uncategorized
  SearchbarComponent,
]
const exports:any[] = declarations;

@NgModule({
  declarations,
  exports:declarations,
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
