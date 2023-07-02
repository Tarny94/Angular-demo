import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './employee/employee.component';
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { DisplayEmployeesComponent } from './employee/display-employees/display-employees.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { EmployeePageComponent } from './employee/employee-page/employee-page.component';
import {MatCardModule} from '@angular/material/card';
import { EmployeeCartsDisplayComponent } from './employee/employee-carts-display/employee-carts-display.component';
import { EmployeeCartComponent } from './employee/employee-cart/employee-cart.component';
import { ModalEditEmployeeComponent } from './employee/modal-edit-employee/modal-edit-employee.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalConfirmationComponent } from './employee/modal-confirmation/modal-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DisplayEmployeesComponent,
    EmployeePageComponent,
    EmployeeCartsDisplayComponent,
    EmployeeCartComponent,
    ModalEditEmployeeComponent,
    ModalConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
