import { Component, OnInit } from '@angular/core';
import { RiskService } from 'src/app/core/services/risk.service';

@Component({
  selector: 'app-security-risk-tracking',
  templateUrl: './security-risk-tracking.component.html',
  styleUrls: ['./security-risk-tracking.component.css'],
})
export class SecurityRiskTrackingComponent implements OnInit {
  riskNotifications: any;
  constructor(private riskService: RiskService) {}

  ngOnInit(): void {
    this.getRisks();
  }

  getRisks() {
    this.riskService.getRisks().subscribe((risks) => {
      this.riskNotifications = risks;
    });
  }
}
