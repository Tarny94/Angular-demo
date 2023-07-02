import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employee, IEmployee } from '../employee';
import { EmployeeCartComponent } from '../employee-cart/employee-cart.component';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-modal-edit-employee',
  templateUrl: './modal-edit-employee.component.html',
  styleUrls: ['./modal-edit-employee.component.css']
})
export class ModalEditEmployeeComponent implements OnInit{

  employee: Employee = new Employee();


  constructor(
              private serviceEmployee : EmployeeService,
              private dialogRef: MatDialogRef<EmployeeCartComponent>,
              private router : Router,
              @Inject(MAT_DIALOG_DATA) public data: IEmployee
              ) {
  }

   onSubmit() {
    this.serviceEmployee.editEmployee(this.data).subscribe(
      value => {
        console.log("Edit Completed:", value)
        this.dialogRef.close()
      },
      error => console.log("Error",error),
      () => {
        console.log("Complete")
      }
    )
  }
  
  phoneValidator(phoneNumber: string): boolean{
    const hasLetters = /[a-zA-Z]/.test(phoneNumber);
    return hasLetters ;
  }

  ngOnInit(): void {
    console.log("#inj", this.data)
  }
}
