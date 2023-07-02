import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, map, Observable, Subject, tap } from 'rxjs';
import { IEmployee } from '../employee';
import { EmployeeCartComponent } from '../employee-cart/employee-cart.component';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-carts-display',
  templateUrl: './employee-carts-display.component.html',
  styleUrls: ['./employee-carts-display.component.css']
})
export class EmployeeCartsDisplayComponent implements OnInit{
  filterName: string = "";

  isListUpdated : boolean = false;

  filterByName= new BehaviorSubject<string>("");
  filterByNameAction$ = this.filterByName.asObservable();

  employeeUpdated= new Subject<IEmployee>();
  employeeUpdatedAction$ = this.employeeUpdated.asObservable();

  employees$! : Observable<IEmployee[]>;

  constructor(
    private employeeService : EmployeeService,
    private router : Router
  ) {
  }

  loadData(){
    this.employees$  = combineLatest(
      [this.employeeService.employees$, this.filterByNameAction$]
    ).pipe(
      tap(item => console.log("#item" ,item)),
      map(([items, filteredName]) =>
        items.filter(item  => filteredName !== ""? item.firstName.toLowerCase().includes(filteredName.toLowerCase())  : true),
      )
    ) ;
  }
   onUpdate() {
      this.loadData()
   }

   onSelected() {
    this.filterByName.next(this.filterName);
    return  this.employees$
  }

  handleAddEmployee(){
    this.router.navigate(["/employees/create"])
  }

  ngOnInit(): void {
    this.loadData()
  }
}
