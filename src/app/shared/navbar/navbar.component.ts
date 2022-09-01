import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public name : string = 'Franccesco Jaimes Agreda';
  public role : string = 'Inspector';
  constructor() { }

  ngOnInit(): void {
  }

}
