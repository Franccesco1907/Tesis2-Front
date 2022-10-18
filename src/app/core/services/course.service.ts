import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const url_base = environment.url_base + '/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private httpClient: HttpClient) {}

  getCourses(id_capacitacion : any) {
    const URL = url_base + '/id_capacitacion=' + id_capacitacion;
    return this.httpClient.get<any>(URL);
  }

  getCourse(id_capacitacion : any, id_curso : any) {
    const URL = url_base + '/id_capacitacion=' + id_capacitacion + '/id_curso=' + id_curso;
    return this.httpClient.get<any>(URL);
  }
}
