import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentInformationComponent } from './equipment-information/equipment-information.component';
import { HomeComponent } from './home/home.component';
import { InitPageComponent } from './init-page/init-page.component';
import { InspectionComponent } from './inspection/inspection.component';
import { RegisterAlertComponent } from './register-alert/register-alert.component';
import { SecurityAlertManagementComponent } from './security-alert-management/security-alert-management.component';
import { SecurityAlertsComponent } from './security-alerts/security-alerts.component';
import { SecurityControlComponent } from './security-control/security-control.component';
import { SecurityEquipmentsComponent } from './security-equipments/security-equipments.component';
import { SecurityRiskTrackingComponent } from './security-risk-tracking/security-risk-tracking.component';
import { UpdateTrackingRiskComponent } from './update-tracking-risk/update-tracking-risk.component';
import { ComponentsComponent } from './components/components.component';
import { LoginComponent } from './login/login.component';
import { CapacitationListComponent } from './capacitation-list/capacitation-list.component';
import { TestListComponent } from './test-list/test-list.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { InspectionListComponent } from './inspection-list/inspection-list.component';
import { InspectionDetailComponent } from './inspection-detail/inspection-detail.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: InitPageComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'security-alerts', component: SecurityAlertsComponent },
      { path: 'security-alerts/register-alert', component: RegisterAlertComponent },
      { path: 'security-alerts/security-alert-management', component: SecurityAlertManagementComponent },
      { path: 'security-alerts/security-risk-tracking', component: SecurityRiskTrackingComponent },
      { path: 'security-alerts/security-risk-tracking/:id_alerta_riesgo', component: UpdateTrackingRiskComponent },
      { path: 'security-control', component: SecurityControlComponent },
      { path: 'security-control/security-equipments', component: SecurityEquipmentsComponent },
      { path: 'security-control/security-equipments/equipment-information/:id_equipo_seguridad', component: EquipmentInformationComponent },
      { path: 'security-control/components/:id_equipo_seguridad', component: ComponentsComponent },
      { path: 'security-control/inspection', component: InspectionComponent },
      { path: 'security-control/inspection-list', component: InspectionListComponent },
      { path: 'security-control/inspection-list/:date_hour', component: InspectionDetailComponent },
      { path: 'capacitation-list', component: CapacitationListComponent },
      { path: 'capacitation-list/:id_capacitation/courses-list', component: CoursesListComponent },
      { path: 'capacitation-list/:id_capacitation/courses-list/:id_course', component: CourseDetailComponent },
      { path: 'test-list', component: TestListComponent },

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
