import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from "./employee/employee.component";
import {DisplayEmployeesComponent} from "./employee/display-employees/display-employees.component";

const routes: Routes = [
  { path: 'employees', component: DisplayEmployeesComponent},
  { path: 'employees/create', component: EmployeeComponent},
  { path: "", redirectTo: "employees", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
