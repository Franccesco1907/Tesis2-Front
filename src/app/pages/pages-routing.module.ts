import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InitPageComponent } from './init-page/init-page.component';
import { SecurityAlertManagementComponent } from './security-alert-management/security-alert-management.component';
import { SecurityAlertsComponent } from './security-alerts/security-alerts.component';

const routes: Routes = [
  {
    path: '',
    component: InitPageComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'security-alerts', component: SecurityAlertsComponent },
      { path: 'security-alerts/security-alert-management', component: SecurityAlertManagementComponent },
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
