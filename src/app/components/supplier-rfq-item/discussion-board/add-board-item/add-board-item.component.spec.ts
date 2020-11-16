import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBoardItemComponent } from './add-board-item.component';

describe('AddBoardItemComponent', () => {
  let component: AddBoardItemComponent;
  let fixture: ComponentFixture<AddBoardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBoardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBoardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
