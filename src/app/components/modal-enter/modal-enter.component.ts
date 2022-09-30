import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-enter',
  templateUrl: './modal-enter.component.html',
  styleUrls: ['./modal-enter.component.css']
})
export class ModalEnterComponent implements OnInit {
  @Input() title = '';
  formEquipment: FormGroup;
  isManualEnter = false;

  constructor(private formBuilder: FormBuilder) {
    this.formEquipment = this.formBuilder.group({
      inputEquipmentCode: [null, Validators.required]
    })
  }

  ngOnInit() {
  }

  accept() {
    
  }

}
