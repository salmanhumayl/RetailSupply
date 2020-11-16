import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotedpriceComponent } from './quotedprice.component';

describe('QuotedpriceComponent', () => {
  let component: QuotedpriceComponent;
  let fixture: ComponentFixture<QuotedpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotedpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotedpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
