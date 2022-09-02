import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-submenu-card',
  templateUrl: './submenu-card.component.html',
  styleUrls: ['./submenu-card.component.css']
})
export class SubmenuCardComponent implements OnInit {
  @Input() imgDirectory : string | undefined;
  @Input() path : string | undefined;
  @Input() subtitle : string | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
