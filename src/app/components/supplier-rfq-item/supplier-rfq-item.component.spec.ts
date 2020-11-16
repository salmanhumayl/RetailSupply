import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierRFQItemComponent } from './supplier-rfq-item.component';

describe('SupplierRFQItemComponent', () => {
  let component: SupplierRFQItemComponent;
  let fixture: ComponentFixture<SupplierRFQItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierRFQItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierRFQItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
