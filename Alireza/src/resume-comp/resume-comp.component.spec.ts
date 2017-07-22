import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeCompComponent } from './resume-comp.component';

describe('ResumeCompComponent', () => {
  let component: ResumeCompComponent;
  let fixture: ComponentFixture<ResumeCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
