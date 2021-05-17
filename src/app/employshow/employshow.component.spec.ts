import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployshowComponent } from './employshow.component';

describe('EmployshowComponent', () => {
  let component: EmployshowComponent;
  let fixture: ComponentFixture<EmployshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
