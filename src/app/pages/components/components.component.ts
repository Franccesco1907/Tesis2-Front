import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ComponentService } from 'src/app/core/services/component.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css'],
})
export class ComponentsComponent implements OnInit {
  components: any;
  textAreaNote: string = '';
  idSecurityEquipment: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private componentService: ComponentService,
    private notificationService: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getComponents();
  }

  getComponents() {
    const pathParams = this.activatedRoute.snapshot.paramMap;
    this.idSecurityEquipment = pathParams.get('id_equipo_seguridad')!;
    this.componentService
      .getComponents(this.idSecurityEquipment)
      .subscribe((components) => {
        console.log('components', components);
        this.components = components;
      });
  }

  register() {
    console.log('textAreaNote', this.textAreaNote);
    let inputs = document.getElementsByTagName('input');
    let history = [];
    for (let i = 0; i < this.components.length; i++) {
      history.push({
        id_componente: this.components[i].id_componente,
        checked: inputs[i].checked,
        id_usuario: 1,
      });
    }

    this.componentService
      .saveComponentsState(
        { components: history, note: this.textAreaNote },
        this.idSecurityEquipment
      )
      .subscribe(
        (data) => {
          this.notificationService.success(
            '¡Se ha guardado el estado de componentes correctamente!',
            '¡REGISTRADO!',
            { positionClass: 'toast-top-center' }
          );
          this.router.navigate(['security-control']);
        },
        (error) => {
          this.notificationService.error(
            '¡Hubo un error en el guardado de los estados!',
            '¡ERROR!',
            { positionClass: 'toast-top-center' }
          );
        }
      );
  }
}
