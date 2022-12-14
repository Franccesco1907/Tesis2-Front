import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url_base = environment.url_base + '/upload';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private httpClient: HttpClient) {}

  uploadFile(id_alerta_riesgo: string | number, file: any) {
    const URL = url_base + '/id_alerta_riesgo=' + id_alerta_riesgo;
    let body = new FormData();
    body.append('ruta', 'uploads');
    body.append('myFile', file.file);
    return this.httpClient.post<any>(URL, body);
  }

}
