import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/core/services/tokenStorage.service';

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
  user: any;
  constructor(private router: Router, private tokenService: TokenStorageService) {}

  ngOnInit(): void {
    this.user = this.tokenService.getUser();
  }

  openModal(title: string) {
    this.titleModal = title;
  }

  accept(event: any) {
    if (event.title == this.titleSecurityEquipments) {
      this.router.navigate(['security-control', 'security-equipments'], event);
    } else if (event.title == this.titleInspection) {
      if(this.user.nombre_rol != 'Seguridad')
        this.router.navigate(['security-control', 'inspection'], event);
      else this.router.navigate(['security-control', 'inspection-list'], event);
    }
  }
}
