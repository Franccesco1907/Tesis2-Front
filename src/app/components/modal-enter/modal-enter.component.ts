import { Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import QrScanner from 'qr-scanner';
@Component({
  selector: 'app-modal-enter',
  templateUrl: './modal-enter.component.html',
  styleUrls: ['./modal-enter.component.css']
})
export class ModalEnterComponent implements OnInit {
  
  @Input() title = '';
  formEquipment: FormGroup;
  isManualEnter = false;
  isScannerEnter = false;
  qrScanner: any;
  cameras: any;

  constructor(private formBuilder: FormBuilder, private router:Router) {
    this.formEquipment = this.formBuilder.group({
      inputEquipmentCode: [null, Validators.required]
    })
    
  }

  ngOnInit() {
    this.cameras = QrScanner.listCameras();
    console.log("QrScanner.listCameras();", this.cameras)
  }

  accept() {
    console.log("this.formEquipment.controls['inputEquipmentCode']", this.formEquipment.controls['inputEquipmentCode'].value);
    this.router.navigate(['security-control','components', this.formEquipment.controls['inputEquipmentCode'].value]);
  }

  startCamara(){
    this.isScannerEnter = !this.isScannerEnter
    setTimeout(() => {
      let scanRef = document.getElementById('scan') as HTMLVideoElement;
      console.log("scanRef", scanRef);
      this.qrScanner = new QrScanner(scanRef, result => this.seeComponents(result));
      this.qrScanner.start();
    }, 1000)
  }

  seeComponents(result : string) {
    console.log('decoded qr code:', result, result.split('=')[1]);
    this.qrScanner.stop();
    // Formato de lectura de QR es: id=1
    let id_equipo_seguridad = result.split('=')[1];
    setTimeout(()=>{
      this.router.navigate(['security-control', 'components', id_equipo_seguridad])
    }, 1000);
  }
}
