import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SectorService } from 'src/app/core/services/sector.service';
import { TokenStorageService } from 'src/app/core/services/tokenStorage.service';
import { ZoneService } from 'src/app/core/services/zone.service';

@Component({
  selector: 'app-modal-ubication',
  templateUrl: './modal-ubication.component.html',
  styleUrls: ['./modal-ubication.component.css'],
})
export class ModalUbicationComponent implements OnInit {
  formUbication: FormGroup;
  sectors: any;
  zones: any;
  isPersonalSecurity: boolean = false;
  hideCboxZone: boolean = false;
  user : any;
  @Input() title: string = '';
  @Input() imageUrl: string = '';
  @Output() accept: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private sectorService: SectorService,
    private zoneService: ZoneService,
    private tokenService: TokenStorageService
  ) {
    this.formUbication = this.formBuilder.group({
      cBoxSector: [null, Validators.required],
      cBoxZone: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.user = this.tokenService.getUser();
    console.log("user", this.user)
    if(this.user.nombre_rol == 'Seguridad')
      this.isPersonalSecurity = true;
    this.fillCboxSector();
    this.onChangeCboxSector();
  }

  acceptModal() {
    this.accept.emit({
      title: this.title,
      id_sector: this.formUbication.controls['cBoxSector'].value,
      id_zone: this.formUbication.controls['cBoxZone'].value,
    });
  }

  fillCboxSector() {
    this.sectorService.getSectors().subscribe((sectors) => {
      this.sectors = sectors;
    });
  }

  onChangeCboxSector() {
    this.formUbication.controls['cBoxSector'].valueChanges.subscribe(
      (idSectorSelected) => {
        let id_sector = this.formUbication.controls['cBoxSector'].value;
        if (id_sector != 0) {
          this.hideCboxZone = false;
          this.getZoneByIdSector(id_sector);
        } else {
          this.hideCboxZone = true;
        }
      }
    );
  }
  getZoneByIdSector(id_sector: number) {
    this.zoneService.getZonesByIdSector(id_sector).subscribe((zones) => {
      this.zones = zones;
    });
  }
}
