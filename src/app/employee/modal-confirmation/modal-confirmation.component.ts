import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IEmployee } from '../employee';
import { EmployeeCartComponent } from '../employee-cart/employee-cart.component';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrls: ['./modal-confirmation.component.css']
})
export class ModalConfirmationComponent {

  constructor(
    private serviceEmployee : EmployeeService,
    private dialogRef: MatDialogRef<EmployeeCartComponent>,
    private router : Router,
    @Inject(MAT_DIALOG_DATA) public data: IEmployee
  ) {
  }

  onDelete() {
    this.serviceEmployee.deleteEmployee(this.data.id).subscribe(
      value => console.log("#Succes Delete", value),
      error => console.log("Error", error),
      () => {
        this.dialogRef.close()
        console.log("Complete")
      }
    )
  }
}
