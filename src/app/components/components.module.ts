import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmenuCardComponent } from './submenu-card/submenu-card.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AlertNotificationsComponent } from './alert-notifications/alert-notifications.component';
import { RiskNotificationsComponent } from './risk-notifications/risk-notifications.component';
import { ModalComponent } from './modal/modal.component';
import { ModalUbicationComponent } from './modal-ubication/modal-ubication.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    NavbarComponent,
    SubmenuCardComponent,
    AlertNotificationsComponent,
    RiskNotificationsComponent,
    ModalComponent,
    ModalUbicationComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [
    NavbarComponent,
    SubmenuCardComponent,
    AlertNotificationsComponent,
    RiskNotificationsComponent,
    ModalComponent,
    ModalUbicationComponent
  ]
})
export class ComponentsModule { }
