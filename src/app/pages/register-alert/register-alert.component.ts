import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/core/services/alert.service';
import { SectorService } from 'src/app/core/services/sector.service';
import { UserService } from 'src/app/core/services/user.service';
import { ZoneService } from 'src/app/core/services/zone.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UploadService } from 'src/app/core/services/upload.service';

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
  photo: boolean = false;
  file: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private sectorService: SectorService,
    private zoneService: ZoneService,
    private alertService: AlertService,
    private uploadService: UploadService,
    private notificationService: ToastrService,
    private router: Router
  ) {
    this.formAlert = this.formBuilder.group({
      inputIncident: [null, Validators.required],
      cBoxUserAffected: [null],
      cBoxSeverity: [null, Validators.required],
      cBoxSector: [null, Validators.required],
      cBoxZone: [null, Validators.required],
      textAreaDescription: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.fillCboxUser();
    this.fillCboxSector();
    this.onChangeCboxSector();
  }

  fillCboxUser() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  fillCboxSector() {
    this.sectorService.getSectors().subscribe((sectors) => {
      this.sectors = sectors;
    });
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
    });
  }

  registerAlert() {
    let alert = {
      id_sector: this.formAlert.value.cBoxSector,
      gravedad: this.formAlert.value.cBoxSeverity,
      id_usuario: this.formAlert.value.cBoxUserAffected || null,
      id_zona: this.formAlert.value.cBoxZone,
      incidente: this.formAlert.value.inputIncident,
      descripcion: this.formAlert.value.textAreaDescription,
    };
    console.log('alert', alert);
    this.alertService.createAlert(alert).subscribe(
      (alert) => {
        (document.getElementById('alertForm') as HTMLFormElement).reset();
        if(this.file) {
          console.log("alert", alert, this.file);
          this.uploadService.uploadFile(alert.id_alerta_riesgo, this.file).subscribe((response) => {
            console.log("response", response)
          })
        }
        this.notificationService.success(
          '¡Se ha registrado exitosamente!',
          '¡REGISTRADO!',
          { positionClass: 'toast-top-center' }
        );
        this.router.navigate(['security-alerts', 'security-alert-management']);
      },
      (error) => {
        this.notificationService.error(
          '¡Hubo un error con el registro de la alerta!',
          '¡ERROR!',
          { positionClass: 'toast-top-center' }
        );
      }
    );
  }

  activeCamara() {
    document.getElementById('input-file')?.click();
  }

  loadFile(event: any) {
    if (event.target.files) {
      const [file] = event.target.files;
      this.file = {
        file: file,
        filename: file.name,
      };
      this.notificationService.success(
        '¡Se ha subido la imagen exitosamente!',
        '¡CARGADO!',
        { positionClass: 'toast-top-center' }
      );
      console.log('event', event);
    }

    // this.uploadService.uploadFile()
    // https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded
  }
}
