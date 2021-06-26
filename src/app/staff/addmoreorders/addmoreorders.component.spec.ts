import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmoreordersComponent } from './addmoreorders.component';

describe('AddmoreordersComponent', () => {
  let component: AddmoreordersComponent;
  let fixture: ComponentFixture<AddmoreordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmoreordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmoreordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
