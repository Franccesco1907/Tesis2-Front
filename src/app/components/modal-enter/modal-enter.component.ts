import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ZXingScannerComponent } from '@zxing/ngx-scanner/public_api';
import { Result } from '@zxing/library';

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
  @ViewChild('scanner')
  scanner!: ZXingScannerComponent;

  hasDevices!: boolean;
  hasPermission!: boolean;
  qrResultString!: string;
  qrResult!: Result;
 
  availableDevices!: MediaDeviceInfo[];
  currentDevice!: MediaDeviceInfo;

  constructor(private formBuilder: FormBuilder) {
    this.formEquipment = this.formBuilder.group({
      inputEquipmentCode: [null, Validators.required]
    })
  }

  ngOnInit() {
    this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
      this.hasDevices = true;
      this.availableDevices = devices;
 
      // selects the devices's back camera by default
      // for (const device of devices) {
      //     if (/back|rear|environment/gi.test(device.label)) {
      //         this.scanner.changeDevice(device);
      //         this.currentDevice = device;
      //         break;
      //     }
      // }
    });
 
    this.scanner.camerasNotFound.subscribe(() => this.hasDevices = false);
    this.scanner.scanComplete.subscribe((result: Result) => this.qrResult = result);
    this.scanner.permissionResponse.subscribe((perm: boolean) => this.hasPermission = perm);
  }

  accept() {
    
  }

  displayCameras(cameras: MediaDeviceInfo[]) {
    console.debug('Devices: ', cameras);
    this.availableDevices = cameras;
  }
 
  handleQrCodeResult(resultString: string) {
    console.debug('Result: ', resultString);
    this.qrResultString = resultString;
  }
 
  // onDeviceSelectChange(selectedValue: string) {
  //   console.debug('Selection changed: ', selectedValue);
  //   this.currentDevice = this.scanner.getAnyVideoDevice .get getDeviceById(selectedValue);
  // }
 
  // stateToEmoji(state: boolean): string {
 
  //   const states = {
  //     // not checked
  //     undefined: '❔',
  //     // failed to check
  //     null: '⭕',
  //     // success
  //     true: '✔',
  //     // can't touch that
  //     false: '❌'
  //   };
 
  //   return states['' + state];
  // }

}
