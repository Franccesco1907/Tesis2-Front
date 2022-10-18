import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const url_base = environment.url_base + '/capacitation';


@Injectable({
  providedIn: 'root'
})
export class CapacitationService {

  constructor(private httpClient: HttpClient) {}

  getCapacitations(id_rol : any) {
    const URL = url_base + '/id_rol=' + id_rol;
    return this.httpClient.get<any>(URL);
  }

  getCapacitation(id_capacitacion : any) {
    const URL = url_base + '/' + id_capacitacion;
    return this.httpClient.get<any>(URL);
  }
}
