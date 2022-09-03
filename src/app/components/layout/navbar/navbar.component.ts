import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public name : string = 'Franccesco Jaimes Agreda';
  public role : string = 'Inspector';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectTo(path  : string){
    this.router.navigate([path]);
  }
}
