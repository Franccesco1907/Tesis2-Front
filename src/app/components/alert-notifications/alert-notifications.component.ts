import { Component, Input, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-alert-notifications',
  templateUrl: './alert-notifications.component.html',
  styleUrls: ['./alert-notifications.component.css'],
})
export class AlertNotificationsComponent implements OnInit {
  @Input() alert: any; // TODO: Cambiar tipos de datos
  titleModal: string = 'Mitigar la alerta';
  descriptionModal: string = '¿Está seguro de mitigar la alerta?';
  showModal: boolean = true;
  constructor() {}

  ngOnInit(): void {
    console.log('imprimiendo alert desde hijo', alert);
  }

  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
}
