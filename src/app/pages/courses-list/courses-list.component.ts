import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/core/services/course.service';
import { TokenStorageService } from 'src/app/core/services/tokenStorage.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  title = 'Listado de cursos';
  capacitationId : any;
  courses : any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService : CourseService,
    private notificationService: ToastrService,
    private tokenStorageService : TokenStorageService
  ) {
    this.capacitationId = this.activatedRoute.snapshot.paramMap.get(
      'id_capacitation'
    );
  }

  ngOnInit() {
    this.getCourses();
  }

  getCourses() {
    let user = this.tokenStorageService.getUser();
    console.log("user", user);
    console.log("user", this.capacitationId);
    this.courseService.getCourses(this.capacitationId).subscribe(
      courses => {
        this.courses = courses;
        if(courses.length == 0) {
          this.notificationService.info(
            '¡No se encontraron cursos pendientes!',
            '¡ATENCIÓN!',
            { positionClass: 'toast-top-center' }
          );
        } 
        console.log("this.courses", this.courses);
      }
    )
  }
}
