import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SecurityAlertsComponent } from './security-alerts/security-alerts.component';
import { InitPageComponent } from './init-page/init-page.component';
import { SecurityAlertManagementComponent } from './security-alert-management/security-alert-management.component';
import { RegisterAlertComponent } from './register-alert/register-alert.component';



@NgModule({
  declarations: [
    HomeComponent,
    SecurityAlertsComponent,
    InitPageComponent,
    SecurityAlertManagementComponent,
    RegisterAlertComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule
  ],
  exports: [
    HomeComponent,
    PagesRoutingModule,
    RegisterAlertComponent,
    SecurityAlertsComponent
  ]
})
export class PagesModule { }
