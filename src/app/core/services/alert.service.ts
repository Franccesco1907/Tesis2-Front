import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const url_base = environment.url_base + '/alert';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private httpClient: HttpClient) {}

  createAlert(alert: any) {
    const URL = url_base + '/';
    return this.httpClient.post<any>(URL, alert);
  }

  getAlerts() {
    const URL = url_base + '/';
    return this.httpClient.get<any>(URL);
  }
}
