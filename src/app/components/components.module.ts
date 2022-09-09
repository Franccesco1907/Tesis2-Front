import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmenuCardComponent } from './submenu-card/submenu-card.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AlertNotificationsComponent } from './alert-notifications/alert-notifications.component';
import { RiskNotificationsComponent } from './risk-notifications/risk-notifications.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SubmenuCardComponent,
    AlertNotificationsComponent,
    RiskNotificationsComponent,
    ModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SubmenuCardComponent,
    AlertNotificationsComponent,
    RiskNotificationsComponent,
    ModalComponent
  ]
})
export class ComponentsModule { }
