import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmenuCardComponent } from './submenu-card/submenu-card.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AlertNotificationsComponent } from './alert-notifications/alert-notifications.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SubmenuCardComponent,
    AlertNotificationsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SubmenuCardComponent,
    AlertNotificationsComponent
  ]
})
export class ComponentsModule { }
