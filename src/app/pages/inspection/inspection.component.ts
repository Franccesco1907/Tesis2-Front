import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PersonalProtectiveEquipmentService } from 'src/app/core/services/personalProtectiveEquipment.service';
import { TokenStorageService } from 'src/app/core/services/tokenStorage.service';

@Component({
  selector: 'app-inspection',
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.css'],
})
export class InspectionComponent implements OnInit {
  navigationExtras: any;
  personalProtectiveEquipments: any;
  user: any;

  constructor(
    private router: Router,
    private personalProtectiveEquipmentService: PersonalProtectiveEquipmentService,
    private notificationService: ToastrService,
    private tokenStorageService: TokenStorageService
  ) {
    this.navigationExtras = this.router.getCurrentNavigation()?.extras;
    console.log('inspec', this.navigationExtras);
  }

  ngOnInit() {
    this.user = this.tokenStorageService.getUser();
    this.personalProtectiveEquipmentService
      .getPersonalProtectiveEquipments(this.navigationExtras.id_zone)
      .subscribe((data) => {
        this.personalProtectiveEquipments = data;
        console.log('epps', data);
      });
  }

  register() {
    let inputs = document.getElementsByTagName('input');
    let history = [];
    for (let i = 0; i < this.personalProtectiveEquipments.length; i++) {
      history.push({
        id_equipo_proteccion_personal:
          this.personalProtectiveEquipments[i].id_equipo_proteccion_personal,
        checked: inputs[i].checked,
        id_zone: this.navigationExtras.id_zone,
        id_user: this.user.id_usuario
      });
    }
    this.personalProtectiveEquipmentService.createHistory(history).subscribe(
      (data) => {
        this.notificationService.success(
          '¡Se ha registrado la inspección correctamente!',
          '¡REGISTRADO!',
          { positionClass: 'toast-top-center' }
        );
        this.router.navigate(['security-control']);
      },
      (error) => {
        this.notificationService.error(
          '¡Hubo un error en el registro de la inspección!',
          '¡ERROR!',
          { positionClass: 'toast-top-center' }
        );
      }
    );
  }
}
