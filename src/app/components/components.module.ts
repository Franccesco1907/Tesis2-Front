import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmenuCardComponent } from './submenu-card/submenu-card.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AlertNotificationsComponent } from './alert-notifications/alert-notifications.component';
import { RiskNotificationsComponent } from './risk-notifications/risk-notifications.component';
import { ModalComponent } from './modal/modal.component';
import { ModalUbicationComponent } from './modal-ubication/modal-ubication.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ModalEnterComponent } from './modal-enter/modal-enter.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [
    NavbarComponent,
    SubmenuCardComponent,
    AlertNotificationsComponent,
    RiskNotificationsComponent,
    ModalComponent,
    ModalEnterComponent,
    ModalUbicationComponent
  ],
  imports: [
    CommonModule, SharedModule, RouterModule, ZXingScannerModule
  ],
  exports: [
    NavbarComponent,
    SubmenuCardComponent,
    AlertNotificationsComponent,
    RiskNotificationsComponent,
    ModalComponent,
    ModalEnterComponent,
    ModalUbicationComponent
  ]
})
export class ComponentsModule { }
