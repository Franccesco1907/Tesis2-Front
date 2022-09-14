import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url_base = environment.url_base + '/sector';

@Injectable({
  providedIn: 'root'
})
export class SectorService {

  constructor(private httpClient: HttpClient) {}
  
  getSectors() {
    const URL = url_base + '/';
    return this.httpClient.get<any>(URL);
  }
}
