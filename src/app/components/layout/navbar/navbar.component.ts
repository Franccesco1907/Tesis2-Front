import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/core/services/tokenStorage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public name: string = '';
  public role: string = '';
  public sector: string = '';
  public user: any;
  constructor(
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.getHeader();
  }

  getHeader() {
    this.user = this.tokenStorageService.getUser();
    this.name = `${this.user.nombres} ${this.user.apellido_paterno} ${this.user.apellido_materno}`;
    this.role = this.user.nombre_rol;
    this.sector = this.user.nombre_sector;
  }

  redirectTo(path: string) {
    this.router.navigate([path]);
  }
}
