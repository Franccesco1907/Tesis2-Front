import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const url_base = environment.url_base + '/component';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(private httpClient: HttpClient) {}

  getComponents(id_equipo_seguridad: any) {
    const URL = url_base + '/id_equipo_seguridad=' + id_equipo_seguridad;
    return this.httpClient.get<any>(URL);
  }
  saveComponentsState(componentsState: any, idSecurityEquipment:any){
    const URL = url_base + '/saveComponentsState/id_equipo_seguridad=' + idSecurityEquipment;
    return this.httpClient.post<any>(URL, componentsState);
  }
}