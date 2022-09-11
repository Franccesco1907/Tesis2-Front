import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-risk-notifications',
  templateUrl: './risk-notifications.component.html',
  styleUrls: ['./risk-notifications.component.css']
})
export class RiskNotificationsComponent implements OnInit {
  @Input() risk : any; // TODO: Cambiar tipos de datos
  titleModal: string = 'Mitigar el riesgo';
  descriptionModal: string = '¿Está seguro de mitigar el riesgo?';
  showModal: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.showModal = true;
  }
  
  closeModal() {
    this.showModal = false;
  }
}
