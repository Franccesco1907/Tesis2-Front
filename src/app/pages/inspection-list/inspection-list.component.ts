import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InspectionService } from 'src/app/core/services/inspection.service';

@Component({
  selector: 'app-inspection-list',
  templateUrl: './inspection-list.component.html',
  styleUrls: ['./inspection-list.component.css'],
})
export class InspectionListComponent implements OnInit {
  inspectionList: any;
  constructor(
    private notificationService: ToastrService,
    private router: Router,
    private inspectionService: InspectionService
  ) {}

  ngOnInit() {
    this.inspectionService.getInspections().subscribe((inspections) => {
      this.inspectionList = inspections;
      console.log('inspections', this.inspectionList);
    });
  }
}
