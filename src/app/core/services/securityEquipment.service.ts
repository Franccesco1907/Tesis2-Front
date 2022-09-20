import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url_base = environment.url_base + '/security-equipment';

@Injectable({
  providedIn: 'root',
})
export class SecurityEquipmentService {
  constructor(private httpClient: HttpClient) {}

  getSecurityEquipments(idSector: any, idZone: any) {
    const URL = url_base + '/' + 'id_sector=' + idSector + '&id_zona=' + idZone;
    return this.httpClient.get<any>(URL);
  }
  getSecurityEquipment(idSecurityEquipment: any) {
    const URL = url_base + '/' + 'id_equipo_seguridad=' + idSecurityEquipment;
    return this.httpClient.get<any>(URL);
  }
}
