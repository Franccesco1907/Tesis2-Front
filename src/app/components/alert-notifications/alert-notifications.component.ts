import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-notifications',
  templateUrl: './alert-notifications.component.html',
  styleUrls: ['./alert-notifications.component.css']
})
export class AlertNotificationsComponent implements OnInit {
  @Input() alert : any; // TODO: Cambiar tipos de datos
  constructor() { }

  ngOnInit(): void {
    console.log("imprimiendo alert desde hijo", alert);
  }

  openDialog() {
    
  }
}
