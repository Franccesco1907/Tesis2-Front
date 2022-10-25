import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const url_base = environment.url_base + '/material';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(private httpClient: HttpClient) {}

  getMaterials(id_curso: any) {
    const URL = url_base + '/id_curso=' + id_curso;
    return this.httpClient.get<any>(URL);
  }
}
