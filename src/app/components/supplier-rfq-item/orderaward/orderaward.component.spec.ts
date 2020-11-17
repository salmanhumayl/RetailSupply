import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderawardComponent } from './orderaward.component';

describe('OrderawardComponent', () => {
  let component: OrderawardComponent;
  let fixture: ComponentFixture<OrderawardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderawardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderawardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
