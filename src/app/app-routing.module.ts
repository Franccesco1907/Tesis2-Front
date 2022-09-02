import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SecurityAlertsComponent } from './security-alerts/pages/security-alerts/security-alerts.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'security-alerts', component: SecurityAlertsComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
