import {Component, OnDestroy, OnInit} from '@angular/core';
import {EmployeeService} from "../employee.service";
import {Subscription} from "rxjs";
import {IEmployee} from "../employee";

@Component({
  selector: 'app-display-employees',
  templateUrl: './display-employees.component.html',
  styleUrls: ['./display-employees.component.css']
})
export class DisplayEmployeesComponent implements OnInit, OnDestroy{
  subscription : Subscription = new Subscription();
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'authority'];
  employeeData : IEmployee[] = [] ;

  constructor(private service : EmployeeService) {
  }

  loadData() {
    this.subscription.add(this.service.getAllEmployee().subscribe( response => {
      this.employeeData = response;
      console.log("Successful Get", response)
    }, error => {
      console.log("Fail GEt", error)
    }))
  }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
