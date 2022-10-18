import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/core/services/course.service';
import { TokenStorageService } from 'src/app/core/services/tokenStorage.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit {
  capacitationId: any;
  courseId: any;
  course: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private notificationService: ToastrService,
    private tokenStorageService: TokenStorageService
  ) {
    this.capacitationId = this.activatedRoute.snapshot.paramMap.get(
      'id_capacitation'
    );
    this.courseId = this.activatedRoute.snapshot.paramMap.get(
      'id_course'
    );
  }

  ngOnInit() {
    this.getCourse();
  }

  getCourse() {
    let user = this.tokenStorageService.getUser();
    console.log("user", user);
    console.log("this.capacitationId, this.courseId", this.capacitationId, this.courseId);
    this.courseService.getCourse(this.capacitationId, this.courseId).subscribe(
      course => {
        this.course = course;
        console.log("this.course", this.course);
      }
    )
  }
}
