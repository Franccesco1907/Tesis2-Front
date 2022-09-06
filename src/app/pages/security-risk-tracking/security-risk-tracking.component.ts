import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-risk-tracking',
  templateUrl: './security-risk-tracking.component.html',
  styleUrls: ['./security-risk-tracking.component.css']
})
export class SecurityRiskTrackingComponent implements OnInit {
  
  riskNotifications = [
    {
      code: 15,
      incident: 'Caída de cargas izadas',
      severity: 'Grave',
      sector: 'Almacén',
      zone: 'Administrativa',
      date: '23-08-2022',
      hour: '15:40 pm',
      cause: 'Poca resistencia de sogas de baja calidad',
      improvementPlan: 'Compra de sogas de mejora calidad',
      description:
        'Debido a la poca resistencia de la soga de baja calidad usada para subir material alugares altos se cayó la carga de productos.',
    },
    {
      code: 16,
      incident: 'Caída de cargas izadas',
      severity: 'Grave',
      sector: 'Almacén',
      zone: 'Administrativa',
      date: '23-08-2022',
      hour: '15:40 pm',
      cause: 'Poca resistencia de sogas de baja calidad',
      improvementPlan: 'Compra de sogas de mejora calidad',
      description:
        'Debido a la poca resistencia de la soga de baja calidad usada para subir material alugares altos se cayó la carga de productos.',
    },
    {
      code: 17,
      incident: 'Caída de cargas izadas',
      severity: 'Grave',
      sector: 'Almacén',
      zone: 'Administrativa',
      date: '23-08-2022',
      hour: '15:40 pm',
      cause: 'Poca resistencia de sogas de baja calidad',
      improvementPlan: 'Compra de sogas de mejora calidad',
      description:
        'Debido a la poca resistencia de la soga de baja calidad usada para subir material alugares altos se cayó la carga de productos.',
    }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log("riskNotifications", this.riskNotifications);
  }

}
