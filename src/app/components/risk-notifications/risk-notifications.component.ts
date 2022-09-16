import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-risk-notifications',
  templateUrl: './risk-notifications.component.html',
  styleUrls: ['./risk-notifications.component.css'],
})
export class RiskNotificationsComponent implements OnInit {
  @Input() risk: any; // TODO: Cambiar tipos de datos
  @Output() updateRisks : EventEmitter<any> = new EventEmitter<any>();
  titleModal: string = 'Mitigar el riesgo';
  descriptionModal: string = '¿Está seguro de mitigar el riesgo?';
  showModal: boolean = true;

  constructor(private alertService: AlertService, private notificationService: ToastrService) {}

  ngOnInit(): void {}

  mitigateRisk(event : any) {
    if(event == true) {
      console.log("se mitigó la alerta", this.risk);
      this.alertService.mitigateAlert(this.risk.id_alerta_riesgo).subscribe(alertMitigated => {
        this.notificationService.success('¡Se ha mitigado correctamente!', 'MITIGADO!', {positionClass: 'toast-top-center'})
        console.log("alertMitigated", alertMitigated);
        this.updateRisks.emit(true);
      }, error => {
        this.notificationService.error('¡Hubo un error en la mitigación del riesgo!', '¡ERROR!', {positionClass: 'toast-top-center'})
      });
    }
  }
}
