import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-alert-management',
  templateUrl: './security-alert-management.component.html',
  styleUrls: ['./security-alert-management.component.css'],
})
export class SecurityAlertManagementComponent implements OnInit {
  alertNotifications = [
    {
      code: 15,
      incident: 'Caída de cargas izadas',
      severity: 'Grave',
      sector: 'Almacén',
      zone: 'Administrativa',
      date: '23-08-2022',
      hour: '15:40 pm',
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
      description:
        'Debido a la poca resistencia de la soga de baja calidad usada para subir material alugares altos se cayó la carga de productos.',
    }
  ];
  constructor() {}

  ngOnInit(): void {
    console.log("alertNotifications", this.alertNotifications);
  }
}
