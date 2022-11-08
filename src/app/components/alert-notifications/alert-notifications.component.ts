import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

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
  base_file = environment.base_file;
  constructor() {}

  ngOnInit(): void {
    console.log('imprimiendo alert desde hijo', alert);
  }

  openModal() {
    this.showModal = true;
  }

  mitigateAlert(event: any) {
    // this.showModal = false;
    console.log('ramoncitoooo', event);
  }

  seeEvidence() {
    console.log("alet", this.alert);
    window.open(this.base_file + '/' + this.alert.ubicacion, '_blank')
  }
}
