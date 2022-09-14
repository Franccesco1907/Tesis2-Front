import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url_base = environment.url_base + '/zone';

@Injectable({
  providedIn: 'root',
})
export class ZoneService {
  constructor(private httpClient: HttpClient) {}

  getZonesByIdSector(id_sector : number) {
    const URL = url_base + '/id_sector=' + id_sector;
    return this.httpClient.get<any>(URL);
  }
}
