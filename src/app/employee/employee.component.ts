import { Component , OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {EmployeeService} from "./employee.service";
import {IEmployee, Employee} from "./employee";
import {Router} from "@angular/router";
import {FormControl, NgForm} from "@angular/forms";


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements  OnDestroy{

  employee = new Employee();

  subscription: Subscription = new Subscription();

  invalid: any = {
    color: 'red'
  }

  constructor(public service : EmployeeService, private router : Router) {
  }

  onSubmit(form : NgForm) {

    console.log("#em:",form)
    this.subscription.add(this.service.createEmployee(form.value).subscribe( response => {

      console.log("Successful", response)
      form.reset();
      this.handleCancelButton();
    }, error => {
      console.log("Fail", error)
    }))
  }

  handleCancelButton() {
    this.router.navigate(['/employees']);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


}
