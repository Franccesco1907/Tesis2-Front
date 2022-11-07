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
import { EquipmentInformationComponent } from './equipment-information/equipment-information.component';
import { ComponentsComponent } from './components/components.component';
import { LoginComponent } from './login/login.component';
import { CapacitationListComponent } from './capacitation-list/capacitation-list.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { TestListComponent } from './test-list/test-list.component';
import { InspectionListComponent } from './inspection-list/inspection-list.component';
import { InspectionDetailComponent } from './inspection-detail/inspection-detail.component';


@NgModule({
  declarations: [
    HomeComponent,
    CapacitationListComponent,
    CourseDetailComponent,
    CoursesListComponent,
    ComponentsComponent,
    EquipmentInformationComponent,
    InitPageComponent,
    InspectionComponent,
    InspectionDetailComponent,
    InspectionListComponent,
    LoginComponent,
    RegisterAlertComponent,
    TestListComponent,
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
    CapacitationListComponent,
    CourseDetailComponent,
    CoursesListComponent,
    ComponentsComponent,
    EquipmentInformationComponent,
    InspectionComponent,
    InspectionDetailComponent,
    InspectionListComponent,
    PagesRoutingModule,
    RegisterAlertComponent,
    TestListComponent,
    SecurityAlertsComponent,
    SecurityControlComponent,
    SecurityEquipmentsComponent,
    SecurityRiskTrackingComponent,
    UpdateTrackingRiskComponent
  ]
})
export class PagesModule { }
