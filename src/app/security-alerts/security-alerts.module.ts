import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityAlertsComponent } from './pages/security-alerts/security-alerts.component';



@NgModule({
  declarations: [
    SecurityAlertsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SecurityAlertsComponent
  ]
})
export class SecurityAlertsModule { }
