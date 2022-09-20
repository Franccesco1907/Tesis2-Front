import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SectorService } from 'src/app/core/services/sector.service';
import { ZoneService } from 'src/app/core/services/zone.service';
import { SecurityEquipmentService } from 'src/app/core/services/securityEquipment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-equipment-information',
  templateUrl: './equipment-information.component.html',
  styleUrls: ['./equipment-information.component.css'],
})
export class EquipmentInformationComponent implements OnInit {
  formSecurityEquipment: FormGroup;
  users: any;
  sectors: any;
  zones: any;
  alerts: any;
  securityEquipment: any;
  id_equipo_seguridad: any;

  constructor(
    private formBuilder: FormBuilder,
    private sectorService: SectorService,
    private zoneService: ZoneService,
    private securityEquipmentService: SecurityEquipmentService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {
    this.formSecurityEquipment = this.formBuilder.group({
      cBoxCode: [null, Validators.required],
      cBoxSector: [null, Validators.required],
      cBoxZone: [null, Validators.required],
      inputPosition: [null, Validators.required],
      inputEquipment: [null, Validators.required],
      inputSerieNumber: [null, Validators.required],
      inputMark: [null, Validators.required],
      inputControlState: [null, Validators.required],
      inputPhysicalState: [null, Validators.required],
      inputAdquisitionDate: [null, Validators.required],
      inputExpirationDate: [null, Validators.required],
    });

    this.id_equipo_seguridad = this.activatedRoute.snapshot.paramMap.get(
      'id_equipo_seguridad'
    );
  }

  ngOnInit() {
    this.fillCboxSector();
    this.onChangeCboxSector();

    this.securityEquipmentService
      .getSecurityEquipment(this.id_equipo_seguridad)
      .subscribe((data) => {
        this.securityEquipment = data;
        console.log('this.securityu', this.securityEquipment);
        this.formSecurityEquipment.patchValue({
          cBoxCode: data.id_equipo_seguridad,
          cBoxSector: data.id_sector,
          cBoxZone: data.id_zona,
          inputPosition: data.posicion,
          inputEquipment: data.nombre,
          inputSerieNumber: data.numero_serie,
          inputMark: data.marca,
          inputControlState: data.estado_control,
          inputPhysicalState: data.estado_fisico,
          inputAdquisitionDate: data.fecha_adquisicion,
          inputExpirationDate: data.fecha_vencimiento,
        });
        this.formSecurityEquipment.disable({ onlySelf: true });
      });
  }

  fillCboxSector() {
    this.sectorService.getSectors().subscribe((sectors) => {
      this.sectors = sectors;
    });
  }

  onChangeCboxSector() {
    this.formSecurityEquipment.controls['cBoxSector'].valueChanges.subscribe(
      (idSectorSelected) => {
        let id_sector = this.formSecurityEquipment.controls['cBoxSector'].value;
        this.getZoneByIdSector(id_sector);
      }
    );
  }
  getZoneByIdSector(id_sector: number) {
    this.zoneService.getZonesByIdSector(id_sector).subscribe((zones) => {
      this.zones = zones;
    });
  }

  close() {
    this.route.navigate(
      ['security-control', 'security-equipments'],
      <any>{
        id_zone: this.formSecurityEquipment.controls['cBoxZone'].value,
        id_sector: this.formSecurityEquipment.controls['cBoxSector'].value,
      }
    );
  }
}
