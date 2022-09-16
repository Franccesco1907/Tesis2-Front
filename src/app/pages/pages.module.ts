import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SecurityAlertsComponent } from './security-alerts/security-alerts.component';
import { InitPageComponent } from './init-page/init-page.component';
import { SecurityAlertManagementComponent } from './security-alert-management/security-alert-management.component';
import { RegisterAlertComponent } from './register-alert/register-alert.component';
import { SecurityRiskTrackingComponent } from './security-risk-tracking/security-risk-tracking.component';
import { SecurityControlComponent } from './security-control/security-control.component';
import { SharedModule } from '../shared/shared.module';
import { UpdateTrackingRiskComponent } from './update-tracking-risk/update-tracking-risk.component';
import { SecurityEquipmentsComponent } from './security-equipments/security-equipments.component';
import { InspectionComponent } from './inspection/inspection.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    InitPageComponent,
    InspectionComponent,
    RegisterAlertComponent,
    SecurityAlertsComponent,
    SecurityAlertManagementComponent,
    SecurityControlComponent,
    SecurityEquipmentsComponent,
    SecurityRiskTrackingComponent,
    UpdateTrackingRiskComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    InspectionComponent,
    PagesRoutingModule,
    RegisterAlertComponent,
    SecurityAlertsComponent,
    SecurityControlComponent,
    SecurityEquipmentsComponent,
    SecurityRiskTrackingComponent,
    UpdateTrackingRiskComponent
  ]
})
export class PagesModule { }
