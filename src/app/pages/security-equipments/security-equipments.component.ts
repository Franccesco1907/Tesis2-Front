import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SecurityEquipmentService } from 'src/app/core/services/securityEquipment.service';

@Component({
  selector: 'app-security-equipments',
  templateUrl: './security-equipments.component.html',
  styleUrls: ['./security-equipments.component.css'],
})
export class SecurityEquipmentsComponent implements OnInit {
  securityEquipments: any;
  navigationExtras: any;
  constructor(
    private notificationService: ToastrService,
    private router: Router,
    private securityEquipmentService: SecurityEquipmentService
  ) {
    this.navigationExtras = this.router.getCurrentNavigation()?.extras;
  }

  ngOnInit() {
    this.securityEquipmentService
      .getSecurityEquipments(
        this.navigationExtras.id_sector,
        this.navigationExtras.id_zone
      )
      .subscribe((securityEquipments) => {
        this.securityEquipments = securityEquipments;
        console.log('this.securityEquipments', this.securityEquipments);
        if (this.securityEquipments.length == 0) {
          this.notificationService.info(
            '¡No se encontraron equipos en el sector y zona indicados!',
            '¡ATENCIÓN!',
            { positionClass: 'toast-top-center' }
          );
        }
      });
  }
}
