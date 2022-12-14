import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const url_base = environment.url_base + '/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

constructor(private httpClient: HttpClient) {}
  
  getTests(id_rol : number, id_usuario : number) {
    const URL = url_base + '/id_rol=' + id_rol + '/id_usuario=' + id_usuario;
    return this.httpClient.get<any>(URL);
  }
}
