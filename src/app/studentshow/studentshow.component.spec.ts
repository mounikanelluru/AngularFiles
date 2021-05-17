import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentshowComponent } from './studentshow.component';

describe('StudentshowComponent', () => {
  let component: StudentshowComponent;
  let fixture: ComponentFixture<StudentshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
