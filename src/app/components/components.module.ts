import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmenuCardComponent } from './submenu-card/submenu-card.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AlertNotificationsComponent } from './alert-notifications/alert-notifications.component';
import { RiskNotificationsComponent } from './risk-notifications/risk-notifications.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SubmenuCardComponent,
    AlertNotificationsComponent,
    RiskNotificationsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SubmenuCardComponent,
    AlertNotificationsComponent,
    RiskNotificationsComponent
  ]
})
export class ComponentsModule { }
