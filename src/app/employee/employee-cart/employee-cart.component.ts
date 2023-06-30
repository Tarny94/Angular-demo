import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IEmployee } from '../employee';
import { ModalConfirmationComponent } from '../modal-confirmation/modal-confirmation.component';
import { ModalEditEmployeeComponent } from '../modal-edit-employee/modal-edit-employee.component';

@Component({
  selector: 'app-employee-cart',
  templateUrl: './employee-cart.component.html',
  styleUrls: ['./employee-cart.component.css']
})
export class EmployeeCartComponent {
  @Input() id: string = '';
  @Input() firstName : string = "";
  @Input() lastName : string = "";
  @Input() email : string = "";
  @Input() phone : string = "";
  @Input() authority : string[] = [];
  @Input() employee$!: Observable<IEmployee[]> ;
  @Output() employeeUpdated : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public dialog: MatDialog) {
  }

  onSubmit() {
    const dialogRef= this.dialog.open(ModalEditEmployeeComponent,{
      data: {
        id: this.id,
        firstName :this.firstName,
        lastName: this.lastName,
        email : this.email,
        phone: this.phone,
        authority: this.authority
      }
    }
   )
  dialogRef.afterClosed().subscribe(
    result => {
      this.employeeUpdated.emit();
    })
  }

  onDelete() {
    const dialogRef = this.dialog.open(ModalConfirmationComponent,{
      data: {
        id: this.id
      }
    })
    dialogRef.afterClosed().subscribe(
      result => {
        this.employeeUpdated.emit();
      })
  }
}

