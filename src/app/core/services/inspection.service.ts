import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url_base = environment.url_base + '/inspection';

@Injectable({
  providedIn: 'root',
})
export class InspectionService {
  constructor(private httpClient: HttpClient) {}


  getInspections() {
    const URL = url_base;
    return this.httpClient.get<any>(URL);
  }

  getPersonalProtectiveEquipmentsByDate(date: any) {
    const URL = url_base + '/date=' + date;
    return this.httpClient.get<any>(URL);
  }
}
