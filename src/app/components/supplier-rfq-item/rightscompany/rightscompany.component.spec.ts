import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightscompanyComponent } from './rightscompany.component';

describe('RightscompanyComponent', () => {
  let component: RightscompanyComponent;
  let fixture: ComponentFixture<RightscompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightscompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightscompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
