import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-ubication',
  templateUrl: './modal-ubication.component.html',
  styleUrls: ['./modal-ubication.component.css']
})
export class ModalUbicationComponent implements OnInit {

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }
  
  closeModal() { // El propio boostrap cierra el modal con la clase
    this.close.emit(false);
  }
}
