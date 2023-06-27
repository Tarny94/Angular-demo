import { Injectable } from '@angular/core';

import {Observable, shareReplay} from 'rxjs';
import {HttpClient} from "@angular/common/http";

interface IEmployee {
  firstName: string;
  lastName: string;
  email: string;
  authority: string[];
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url: string = 'http://localhost:8080/employees';

  employees$  = this.http.get<IEmployee[]>(this.url).pipe(
    // shareReplay(1),
  ) ;

  constructor(private http: HttpClient) {}

  createEmployee(employee : IEmployee): Observable<Object> {
    return this.http.post(this.url,employee);
  }

  getAllEmployee() : Observable<any> {
    return this.http.get(this.url);
  }
}
