import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/core/services/course.service';
import { MaterialService } from 'src/app/core/services/material.service';
import { TokenStorageService } from 'src/app/core/services/tokenStorage.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit {
  capacitationId: any;
  courseId: any;
  course: any;
  materials: any;
  videos: any;
  files: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private materialService: MaterialService,
    private notificationService: ToastrService,
    private tokenStorageService: TokenStorageService,
    private sanitizer: DomSanitizer
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
    this.getMaterials();
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

  getMaterials() {
    this.materialService.getMaterials(this.courseId).subscribe(materials => {
      this.materials = materials;
      console.log("materials", this.materials);
      this.files = this.materials.filter((material:any) => material.tipo == 'archivo');
      this.videos = this.materials.filter((material:any) => material.tipo == 'video');
      console.log("files", this.files);
      console.log("videos", this.videos);
    })
  }

  convertUrl(url: string) { // https://www.youtube.com/watch?v=y6jhr7QLNug
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + url.split('=')[1]);
  }
}
