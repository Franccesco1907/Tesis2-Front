import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url_base = environment.url_base + '/personal-protective-equipment';

@Injectable({
  providedIn: 'root'
})
export class PersonalProtectiveEquipmentService {

  constructor(private httpClient: HttpClient) {}

  getPersonalProtectiveEquipments(idZone: any) {
    const URL = url_base + '/' + 'id_zona=' + idZone;
    return this.httpClient.get<any>(URL);
  }

  createHistory(history: any) {
    const URL = url_base + '/' + 'createHistory';
    return this.httpClient.post<any>(URL, history);
  }
}
