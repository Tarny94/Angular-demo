import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {BehaviorSubject, combineLatest, tap } from 'rxjs';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit{

    employeeId: string | null = ""
    employee :any
    constructor(
      private employeeService : EmployeeService,
      private route: ActivatedRoute,
      private router: Router
    ) {
    }

  ngOnInit(): void {
       this.employeeId = this.route.snapshot.paramMap.get("id");
    console.log("#3.id", this.employeeId)
      this.employeeService.getEmployee(this.employeeId).pipe(
        tap(item => console.log("$", item))
      ).subscribe(value => this.employee = value)
    console.log("#4ee:", this.employee)
    }
}
