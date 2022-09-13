import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-control',
  templateUrl: './security-control.component.html',
  styleUrls: ['./security-control.component.css']
})
export class SecurityControlComponent implements OnInit {
  
  titleModal: string = 'Equipos de seguridad';
  descriptionModal: string = '¿Está seguro de mitigar la alerta?';
  showModal: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.showModal = true;
  }
  
  closeModal() {
    // this.showModal = false;
  }
}
