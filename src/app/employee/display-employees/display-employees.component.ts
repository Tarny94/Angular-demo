import {Component, OnDestroy, OnInit, VERSION} from '@angular/core';
import {EmployeeService} from "../employee.service";
import {
  BehaviorSubject,
  combineLatest,
  filter,
  from,
  map,
  Observable,
  of,
  shareReplay,
  Subscription,
  take,
  tap
} from "rxjs";
import {IEmployee} from "../employee";
import {Router} from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-display-employees',
  templateUrl: './display-employees.component.html',
  styleUrls: ['./display-employees.component.css']
})
export class DisplayEmployeesComponent implements OnInit{
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'authority'];

  filterByName= new BehaviorSubject<string>("");
  filterByNameAction$ = this.filterByName.asObservable();


  name = "Angular "+ VERSION.major

  filterName: string = "";


  employees$  = combineLatest(
    [this.service.employees$, this.filterByNameAction$]
  ).pipe(
       tap(item => console.log("#item" ,item)),
         map(([items, filteredName]) =>
           items.filter(item  => filteredName !== ""? item.firstName.toLowerCase().includes(filteredName.toLowerCase())  : true),
         ),
  ) ;

  constructor(private service : EmployeeService, private router : Router) {
  }

  onClick(employeeId: string) {
    this.router.navigate(['employees',employeeId])
  }

  onSelected() {
    this.filterByName.next(this.filterName);
    return this.employees$
  }

  test() {
    const apples= ['apple1', 'apple2']

    // of(2,4,6).pipe(
    //   take(2),
    //   map(item => item * 2),
    //   map(item => item - 3),
    //   tap(item => console.log("tap", item + 2))
    // ).subscribe({
    //   next : (value) => console.log("of",value),
    //   error:  (error) => console.log(error),
    //   complete: () => console.log("Complete of")
    // })

    // const observable = new Observable(observe => {
    //   observe.next(3);
    //   observe.next(2);
    //   observe.next(10);
    //   observe.complete()
    // })

    const observable = new Observable(observe => {
      observe.next([3,5,6]);
      observe.next([2,6,7,4]);
      observe.complete()
    })

    observable.pipe(
      take(2)
    ).subscribe( {
      next: (value : any) => of(...value).pipe(
        take(3)
      ).subscribe({
        next : (value) => console.log("from",value),
        error:  (error) => console.log(error),
        complete: () => console.log("Complete")
      }),
      error: (error) => console.log(error),
      complete: () => console.log("Complete2")
    })

   //  from([2,4,6,5,3,6]).pipe(
   //
   //    map(item => item * 2),
   //    map(item => item - 3),
   //    tap(item => console.log("tap", item + 2)),
   //  take(3)
   //  ).subscribe({
   //    next : (value) => console.log("from",value),
   //    error:  (error) => console.log(error),
   //    complete: () => console.log("Complete")
   // })
  }

  handleAddEmployee(){
    this.router.navigate(["/employees/create"])
  }

  ngOnInit(): void {
    this.test()
  }

}
