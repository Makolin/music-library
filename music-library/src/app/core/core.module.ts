import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './sidebar/menu/menu.component';

@NgModule({
  declarations:
    [
      HeaderComponent,
      FooterComponent,
      SidebarComponent,
      MenuComponent
    ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent
  ]
})
export class CoreModule {}
