import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-security-control',
  templateUrl: './security-control.component.html',
  styleUrls: ['./security-control.component.css'],
})
export class SecurityControlComponent implements OnInit {
  titleSecurityEquipments = 'Equipos de seguridad';
  titleChangeEquipment = 'Cambio de equipos';
  titleInspection = "Inspección de EPP's";
  titleModal: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  openModal(title: string) {
    this.titleModal = title;
  }

  accept(event: any) {
    if (event.title == this.titleSecurityEquipments) {
      this.router.navigate(['security-control', 'security-equipments'], event);
    } else if (event.title == this.titleInspection) {
      this.router.navigate(['security-control', 'inspection'], event);
    }
  }
}
