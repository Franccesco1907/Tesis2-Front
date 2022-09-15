import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const url_base = environment.url_base + '/risk';

@Injectable({
  providedIn: 'root'
})
export class RiskService {

  constructor(private httpClient: HttpClient) {}

  getRisks() {
    const URL = url_base + '/';
    return this.httpClient.get<any>(URL);
  }
}
