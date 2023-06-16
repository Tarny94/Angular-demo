import { Component , OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {EmployeeService} from "./employee.service";
import {IEmployee} from "./employee";
import {Router} from "@angular/router";


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements  OnDestroy{

  firstName!: string;
  lastName!: string;
  email!: string ;
  authority!: string[];

  subscription: Subscription = new Subscription();

  constructor(public service : EmployeeService, private router : Router) {
  }

  onSubmit() {
    console.log("#1",this.firstName,this.lastName,this.email,this.authority)

    const employee : IEmployee = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      authority: this.authority
    }

    this.subscription.add(this.service.createEmployee(employee).subscribe( response => {

      console.log("Successful", response)
      this.router.navigate(['/employees']);
    }, error => {
      console.log("Fail", error)
    }))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


}
