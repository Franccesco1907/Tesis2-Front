import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url_base = environment.url_base + '/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string) {
    let URL = url_base + '/login'
    return this.httpClient.post(URL, {
      email,
      password
    }, httpOptions);
  }
}