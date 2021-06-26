import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateroutesComponent } from './navigateroutes.component';

describe('NavigateroutesComponent', () => {
  let component: NavigateroutesComponent;
  let fixture: ComponentFixture<NavigateroutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigateroutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigateroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
