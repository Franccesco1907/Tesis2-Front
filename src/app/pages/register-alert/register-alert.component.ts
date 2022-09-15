import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/core/services/alert.service';
import { SectorService } from 'src/app/core/services/sector.service';
import { UserService } from 'src/app/core/services/user.service';
import { ZoneService } from 'src/app/core/services/zone.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register-alert',
  templateUrl: './register-alert.component.html',
  styleUrls: ['./register-alert.component.css'],
})
export class RegisterAlertComponent implements OnInit {
  formAlert: FormGroup;
  users: any;
  sectors: any;
  zones: any;
  alerts: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private sectorService: SectorService,
    private zoneService: ZoneService,
    private alertService: AlertService,
    private notificationService: ToastrService
  ) {
    this.formAlert = this.formBuilder.group({
      inputIncident: [null, Validators.required],
      cBoxUser: [null],
      cBoxSeverity: [null, Validators.required],
      cBoxSector: [null, Validators.required],
      cBoxZone: [null, Validators.required],
      textAreaDescription: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
      console.log('this.users', this.users);
    });
    this.sectorService.getSectors().subscribe((sectors) => {
      this.sectors = sectors;
      console.log('this.sectors', this.sectors);
    });

    this.onChangeCboxSector();
  }
  onChangeCboxSector() {
    this.formAlert.controls['cBoxSector'].valueChanges.subscribe(
      (idSectorSelected) => {
        let id_sector = this.formAlert.controls['cBoxSector'].value;
        this.getZoneByIdSector(id_sector);
      }
    );
  }
  getZoneByIdSector(id_sector: number) {
    this.zoneService.getZonesByIdSector(id_sector).subscribe((zones) => {
      this.zones = zones;
      console.log('this.zones', this.zones);
    });
  }

  registerAlert() {
    let alert = {
      id_sector: this.formAlert.value.cBoxSector,
      gravedad: this.formAlert.value.cBoxSeverity,
      id_usuario: this.formAlert.value.cBoxUser || null,
      id_zona: this.formAlert.value.cBoxZone,
      incidente: this.formAlert.value.inputIncident,
      descripcion: this.formAlert.value.textAreaDescription,
    }
    console.log("alert", alert);

    this.alertService.createAlert(alert).subscribe(alert => {
      console.log("alert service", alert);
      (document.getElementById('alertForm') as HTMLFormElement).reset();
      this.notificationService.success('Confirmación de mensaje', 'REGISTRADO', {positionClass: 'toast-top-center'})
    }, error => {
      this.notificationService.error('Hubo un error con el registro de la alerta', 'ERROR', {positionClass: 'toast-top-center'})
    });
  }
}
