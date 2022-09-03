import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmenuCardComponent } from './submenu-card/submenu-card.component';
import { NavbarComponent } from './layout/navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SubmenuCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SubmenuCardComponent
  ]
})
export class ComponentsModule { }
