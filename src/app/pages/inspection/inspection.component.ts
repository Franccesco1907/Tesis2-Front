import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inspection',
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.css']
})
export class InspectionComponent implements OnInit {
  navigationExtras : object | undefined = {};
  constructor(private router: Router) {
    this.navigationExtras = this.router.getCurrentNavigation()?.extras;
    console.log('inspec', this.navigationExtras);
  }

  ngOnInit() {
    
  }

}
