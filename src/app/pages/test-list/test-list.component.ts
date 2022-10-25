import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CapacitationService } from 'src/app/core/services/capacitation.service';
import { TestService } from 'src/app/core/services/test.service';
import { TokenStorageService } from 'src/app/core/services/tokenStorage.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css'],
})
export class TestListComponent implements OnInit {
  title = 'Listado de cuestionarios pendientes';
  tests: any;

  constructor(
    private testService: TestService,
    private notificationService: ToastrService,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit() {
    this.getTests();
  }

  getTests() {
    let user = this.tokenStorageService.getUser();
    console.log('user', user);
    this.testService
      .getTests(user.id_rol, user.id_usuario)
      .subscribe((tests) => {
        this.tests = tests;
        if (tests.length == 0) {
          this.notificationService.info(
            '¡No se encontraron cuestionarios pendientes!',
            '¡ATENCIÓN!',
            { positionClass: 'toast-top-center' }
          );
        }
        console.log('this.tests', this.tests);
      });
  }
}
