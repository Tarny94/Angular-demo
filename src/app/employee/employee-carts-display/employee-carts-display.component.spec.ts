import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCartsDisplayComponent } from './employee-carts-display.component';

describe('EmployeeCartsDisplayComponent', () => {
  let component: EmployeeCartsDisplayComponent;
  let fixture: ComponentFixture<EmployeeCartsDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeCartsDisplayComponent]
    });
    fixture = TestBed.createComponent(EmployeeCartsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
