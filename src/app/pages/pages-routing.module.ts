import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InitPageComponent } from './init-page/init-page.component';
import { RegisterAlertComponent } from './register-alert/register-alert.component';
import { SecurityAlertManagementComponent } from './security-alert-management/security-alert-management.component';
import { SecurityAlertsComponent } from './security-alerts/security-alerts.component';
import { SecurityControlComponent } from './security-control/security-control.component';
import { SecurityRiskTrackingComponent } from './security-risk-tracking/security-risk-tracking.component';

const routes: Routes = [
  {
    path: '',
    component: InitPageComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'security-alerts', component: SecurityAlertsComponent },
      { path: 'security-alerts/register-alert', component: RegisterAlertComponent },
      { path: 'security-alerts/security-alert-management', component: SecurityAlertManagementComponent },
      { path: 'security-alerts/security-risk-tracking', component: SecurityRiskTrackingComponent },
      { path: 'security-control', component: SecurityControlComponent },
      { path: 'security-control/register-alert', component: RegisterAlertComponent },
      { path: 'security-control/security-alert-management', component: SecurityAlertManagementComponent },
      { path: 'security-control/security-risk-tracking', component: SecurityRiskTrackingComponent },

      { path: '**', component: HomeComponent },
    ],
  },
  {
    path: '**',
    component: InitPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
