import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Output() accept: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
  }

  acceptModal() { // El propio boostrap cierra el modal con la clase
    this.accept.emit(true);
  }
}
