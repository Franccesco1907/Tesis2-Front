import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-security-alert-management',
  templateUrl: './security-alert-management.component.html',
  styleUrls: ['./security-alert-management.component.css'],
})
export class SecurityAlertManagementComponent implements OnInit {
  alertNotifications : any;
  constructor(private alertService : AlertService) {}

  ngOnInit(): void {
    this.getAlerts();
  }

  getAlerts() {
    this.alertService.getAlerts().subscribe(alerts => {
      this.alertNotifications = alerts;
    })
  }
}
