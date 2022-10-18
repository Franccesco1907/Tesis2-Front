import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CapacitationService } from 'src/app/core/services/capacitation.service';
import { TokenStorageService } from 'src/app/core/services/tokenStorage.service';

@Component({
  selector: 'app-capacitation-list',
  templateUrl: './capacitation-list.component.html',
  styleUrls: ['./capacitation-list.component.css']
})
export class CapacitationListComponent implements OnInit {
  title = 'Listado de capacitaciones';
  capacitations : any;
  constructor(
    private capacitationService : CapacitationService,
    private notificationService: ToastrService,
    private tokenStorageService : TokenStorageService
  ) { }

  ngOnInit() {
    this.getCapacitations();
  }

  getCapacitations() {
    let user = this.tokenStorageService.getUser();
    console.log("user", user);
    this.capacitationService.getCapacitations(user.id_rol).subscribe(
      capacitations => {
        this.capacitations = capacitations;
        if(capacitations.length == 0) {
          this.notificationService.info(
            '¡No se encontraron capacitaciones pendientes!',
            '¡ATENCIÓN!',
            { positionClass: 'toast-top-center' }
          );
        } 
        console.log("this.capacitations", this.capacitations);
      }
    )
  }
}
