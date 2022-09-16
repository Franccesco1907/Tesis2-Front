import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/core/services/alert.service';
import { SectorService } from 'src/app/core/services/sector.service';
import { UserService } from 'src/app/core/services/user.service';
import { ZoneService } from 'src/app/core/services/zone.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-equipment-information',
  templateUrl: './equipment-information.component.html',
  styleUrls: ['./equipment-information.component.css']
})
export class EquipmentInformationComponent implements OnInit {
  formAlert: FormGroup;
  users: any;
  sectors: any;
  zones: any;
  alerts: any;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private sectorService: SectorService,
    private zoneService: ZoneService,
    private alertService: AlertService,
    private notificationService: ToastrService) {
      this.formAlert = this.formBuilder.group({
        cBoxSector: [null, Validators.required],
        cBoxZone: [null, Validators.required],
        inputEquipment: [null, Validators.required],
        inputSerieNumber: [null, Validators.required],
        inputMark: [null, Validators.required],
        inputAdquisitionDate: [null, Validators.required],
        inputExpirationDate: [null, Validators.required]
      });
     }

  ngOnInit() {
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

}
