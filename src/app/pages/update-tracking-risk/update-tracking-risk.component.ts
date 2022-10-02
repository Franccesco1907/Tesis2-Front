import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SectorService } from 'src/app/core/services/sector.service';
import { UserService } from 'src/app/core/services/user.service';
import { ZoneService } from 'src/app/core/services/zone.service';
import { ToastrService } from 'ngx-toastr';
import { RiskService } from 'src/app/core/services/risk.service';

@Component({
  selector: 'app-update-tracking-risk',
  templateUrl: './update-tracking-risk.component.html',
  styleUrls: ['./update-tracking-risk.component.css'],
})
export class UpdateTrackingRiskComponent implements OnInit {
  formTracking: FormGroup;
  users: any;
  sectors: any;
  zones: any;
  alerts: any;
  risk: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private sectorService: SectorService,
    private zoneService: ZoneService,
    private riskService: RiskService,
    private router: Router,
    private notificationService: ToastrService
  ) {
    this.formTracking = this.formBuilder.group({
      inputCode: [null],
      inputIncident: [null, Validators.required],
      inputCause: [null, Validators.required],
      inputImprovementPlan: [null, Validators.required],
      cBoxUserAffected: [null],
      cBoxUserResponsable: [null, Validators.required],
      cBoxSeverity: [null, Validators.required],
      cBoxSector: [null, Validators.required],
      cBoxZone: [null, Validators.required],
      textAreaDescription: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.fillCboxUser();
    this.fillCboxSector();
    this.onChangeCboxSector();
    this.getRisk();
  }

  getRisk() {
    const pathParams = this.activatedRoute.snapshot.paramMap;
    const idAlertRisk = pathParams.get('id_alerta_riesgo')!;
    this.riskService.getRisk(idAlertRisk).subscribe((risk) => {
      this.risk = risk;
      this.formTracking.patchValue({
        inputCode: risk.id_alerta_riesgo,
        inputIncident: risk.incidente,
        inputCause: risk.causa,
        inputImprovementPlan: risk.plan_mejora,
        cBoxUserAffected: risk.id_usuario,
        cBoxUserResponsable: risk.id_usuario,
        cBoxSeverity: risk.gravedad,
        cBoxSector: risk.id_sector,
        cBoxZone: risk.id_zona,
        textAreaDescription: risk.descripcion,
      });
      this.formTracking.controls['inputCode'].disable({ onlySelf: true });
    });
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
    this.formTracking.controls['cBoxSector'].valueChanges.subscribe(
      () => {
        let id_sector = this.formTracking.controls['cBoxSector'].value;
        this.getZoneByIdSector(id_sector);
      }
    );
  }
  getZoneByIdSector(id_sector: number) {
    this.zoneService.getZonesByIdSector(id_sector).subscribe((zones) => {
      this.zones = zones;
    });
  }

  updateRisk() {
    let riskTracking = {
      id_alerta_riesgo: this.risk.id_alerta_riesgo,
      id_sector: this.formTracking.value.cBoxSector,
      gravedad: this.formTracking.value.cBoxSeverity,
      id_usuario_afectado: this.formTracking.value.cBoxUserAffected || null,
      id_usuario_responsable:
        this.formTracking.value.cBoxUserResponsable || null,
      id_zona: this.formTracking.value.cBoxZone,
      incidente: this.formTracking.value.inputIncident,
      causa: this.formTracking.value.inputCause,
      plan_mejora: this.formTracking.value.inputIncident,
      descripcion: this.formTracking.value.textAreaDescription,
    };
    console.log('riskTracking', riskTracking);

    this.riskService.updateRisk(riskTracking).subscribe(
      (risk) => {
        this.router.navigateByUrl('/security-alerts/security-risk-tracking');
        this.notificationService.success(
          '¡Se actualizó el seguimiento del riesgo satisfactoriamente!',
          '¡ACTUALIZADO!',
          { positionClass: 'toast-top-center' }
        );
      },
      (error) => {
        this.notificationService.error(
          '¡Hubo un error con la actualización del seguimiento del riesgo!',
          '¡ERROR!',
          { positionClass: 'toast-top-center' }
        );
      }
    );
  }
}
