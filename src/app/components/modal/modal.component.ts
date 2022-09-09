import { Component, OnInit } from '@angular/core';

declare var window: any;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  modal: any;
  constructor() {}

  ngOnInit(): void {
    this.modal = new window.bootstrap.Modal(
      document.getElementById('modal')
    )
  }

  openModal() {
    this.modal.show()
  }

  closeModal() {
    this.modal.hide()
  }
}
