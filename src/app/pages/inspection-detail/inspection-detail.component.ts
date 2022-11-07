import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InspectionService } from 'src/app/core/services/inspection.service';
import { PersonalProtectiveEquipmentService } from 'src/app/core/services/personalProtectiveEquipment.service';
import { TokenStorageService } from 'src/app/core/services/tokenStorage.service';


@Component({
  selector: 'app-inspection-detail',
  templateUrl: './inspection-detail.component.html',
  styleUrls: ['./inspection-detail.component.css']
})
export class InspectionDetailComponent implements OnInit {
  navigationExtras: any;
  personalProtectiveEquipments: any;
  date_hour: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private inspectionService: InspectionService
    ) {}

  ngOnInit() {
    const pathParams = this.activatedRoute.snapshot.paramMap;
    this.date_hour = pathParams.get('date_hour')!;
    console.log('date_hour', this.date_hour);

    this.inspectionService.getPersonalProtectiveEquipmentsByDate(this.date_hour).subscribe((data) => {
      this.personalProtectiveEquipments = data;
      console.log("data", data)
    });
  }

}
