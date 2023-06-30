import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCartComponent } from './employee-cart.component';

describe('EmployeeCartComponent', () => {
  let component: EmployeeCartComponent;
  let fixture: ComponentFixture<EmployeeCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeCartComponent]
    });
    fixture = TestBed.createComponent(EmployeeCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
