import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from "./employee/employee.component";
import {DisplayEmployeesComponent} from "./employee/display-employees/display-employees.component";
import { EmployeePageComponent } from './employee/employee-page/employee-page.component';
import { EmployeeCartsDisplayComponent } from './employee/employee-carts-display/employee-carts-display.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeCartsDisplayComponent},
  { path: 'employees/create', component: EmployeeComponent},
  { path: 'employees/:id', component: EmployeePageComponent},
  { path: "", redirectTo: "employees", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
